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
		const globe = d3
			.select(this.$refs.globe)
			.attr("width", this.width)
			.attr("height", this.height);

		const projection = d3
			.geoOrthographic()
			.scale(250)
			.translate([this.width / 2, this.height / 2]);

		const path = d3.geoPath().projection(projection);

		globe.append("path").datum({ type: "Sphere" }).attr("class", "water").attr("d", path);

		const [worldData, countryNames] = await Promise.all([
			d3.json("https://unpkg.com/world-atlas@1/world/110m.json"),
			d3.tsv(
				"https://raw.githubusercontent.com/KoGor/Map-Icons-Generator/master/data/world-110m-country-names.tsv"
			),
		]);

		const countries = topojson.feature(worldData, worldData["objects"]["countries"]).features;

		let countryById = {};

		countryNames.forEach(function (d) {
			countryById[d.id] = d.name;
		});

		globe
			.selectAll("path.land")
			.data(countries)
			.enter()
			.append("path")
			.attr("class", "land")
			.attr("d", path)
			.each(function (d) {
				let country_name = "undefined";

				try {
					d.id = d.id.replace(/^0+/, ""); // Removes leading zeros
					country_name = countryById[d.id].split(" ").join("_");
				} catch (err) {}

				d3.select(this).attr("id", country_name);
			});

		d3.map(this.visitedCountries, function (country) {
			d3.selectAll("#" + country.name.split(" ").join("_")).attr("class", "visited");
		});
	},
};
</script>

<style>
#globe {
	stroke-width: 0.5;
	stroke: white;
}

html.dark-mode #globe {
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

.visited:hover {
	@apply fill-current text-secondary;
}
</style>
