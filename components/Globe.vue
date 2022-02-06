<template>
	<svg id="globe" ref="globe" viewBox="0 0 500 500"></svg>
</template>

<script>
import * as topojson from "topojson-client";
import * as d3 from "d3";

export default {
	name: "globe",
	head: {
		title: "Travel | Eduardo Correia",
	},
	props: ["visitedCountries"],
	data() {
		return {
			width: 500,
			height: 500,
		};
	},
	async mounted() {
		this.svg = d3
			.select(this.$refs.globe)
			.attr("width", this.width)
			.attr("height", this.height);

		this.projection = d3
			.geoOrthographic()
			.scale(250)
			.translate([this.width / 2, this.height / 2]);

		this.path = d3.geoPath().projection(this.projection);

		this.svg
			.append("path")
			.datum({ type: "Sphere" })
			.attr("class", "water")
			.attr("d", this.path);

		[this.worldData, this.countryNames] = await Promise.all([
			d3.json("https://unpkg.com/world-atlas@1/world/110m.json"),
			d3.tsv(
				"https://raw.githubusercontent.com/KoGor/Map-Icons-Generator/master/data/world-110m-country-names.tsv"
			),
		]);

		this.countries = topojson.feature(
			this.worldData,
			this.worldData["objects"]["countries"]
		).features;

		let countryById = {};

		this.countryNames.forEach(function (d) {
			countryById[d.id] = d.name;
		});

		this.svg
			.selectAll("path.land")
			.data(this.countries)
			.enter()
			.append("path")
			.attr("class", "land")
			.attr("d", this.path)
			.each(function(d) {
				let countryName = "undefined";

				try {
					d.id = d.id.replace(/^0+/, ""); // Removes leading zeros
					countryName = countryById[d.id].split(" ").join("_");
				} catch (err) {
				}

				d3.select(this).attr("id", countryName);
			});

		d3.map(this.visitedCountries, function(country) {
			d3.selectAll("#" + country.name.split(" ").join("_")).attr("class", "visited");
		});

		this.svg.call(
			d3.drag().on("drag", (event) => {
				const rotate = this.projection.rotate();
				const k = 75 / this.projection.scale();

				this.projection.rotate([rotate[0] + event.dx * k, rotate[1] - event.dy * k]);

				this.path = d3.geoPath().projection(this.projection);

				this.svg.selectAll("path").attr("d", this.path);
			}),
		);
	},
	methods: {
		country(countryName) {
			const id = this.countryNames.find((country) => country.name == countryName).id;

			return this.countries.find((country) => country.id == id);
		},
		focus(countryName) {
			let focusedCountry = this.country(countryName);

			const centroid = d3.geoCentroid(focusedCountry);

			d3.transition()
				.duration(1000)
				.tween("rotate", () => {
					const interpolator = d3.interpolate(this.projection.rotate(), [
						-centroid[0],
						-centroid[1],
					]);

					return function(t) {
						this.projection.rotate(interpolator(t));
						this.svg.selectAll("path").attr("d", this.path);
					}.bind(this);
				});
		},
		highlightCountry(country, highlight) {
			const node = d3.selectAll("#" + country.split(" ").join("_")).node();

			if (highlight) node.classList.add("highlight");
			else node.classList.remove("highlight");
		},
	},
};
</script>

<style>
#globe {
	stroke-width: 0.5;
	stroke: white;
}

html.dark #globe {
	stroke: #2f2f2f;
}

.water {
	@apply fill-current text-white dark:text-gray-dark;
}

.land {
	@apply fill-current text-black dark:text-white;
}

.visited {
	@apply fill-current text-primary;
}

.visited.highlight,
.visited:hover {
	@apply fill-current text-secondary;
}
</style>