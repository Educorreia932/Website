<template>
	<svg id="globe"></svg>
</template>

<script>
import * as d3 from "d3"
import * as topojson from "topojson"

export default {
	name: "Globe",
	props: ["width", "height", "speed"],
	mounted() {
		this.drawGlobe();
	},
	methods: {
		async drawGlobe() {
			let projection = d3.geoOrthographic()
				.scale(200)
				.translate([this.width / 2, this.height / 2]);

			let path = d3.geoPath().projection(projection);
			let svg = d3.select("svg")
				.attr("width", this.width)
				.attr("height", this.height);

			svg.append("path")
				.datum({type: "Sphere"})
				.attr("class", "water")
				.attr("d", path);

			const [worldData, countryNames, visitedCountries] = await Promise.all([
				d3.json("https://unpkg.com/world-atlas@1/world/110m.json"),
				d3.tsv("https://raw.githubusercontent.com/KoGor/Map-Icons-Generator/master/data/world-110m-country-names.tsv"),
				d3.csv("/VisitedCountries.csv")
			]);

			const countries = topojson.feature(worldData, worldData["objects"]["countries"]).features;

			let countryById = {};

			countryNames.forEach(function (d) {
				countryById[d.id] = d.name;
			});

			svg.selectAll("path.land")
				.data(countries)
				.enter()
				.append("path")
				.attr("class", "land")
				.attr("d", path)
				.each(
					function (d) {
						let country_name = "undefined";

						try {
							d.id = d.id.replace(/^0+/, ''); // Removes leading zeros
							country_name = countryById[d.id].split(' ').join('_');
						} catch (err) {
							console.log(country_name)
						}

						d3.select(this).attr("id", country_name);
					}
				);

			d3.map(visitedCountries, function (d) {
				d3.selectAll("#" + d.country.split(' ').join('_')).attr("class", "highlight");
			});

			// Enable globe rotation
			d3.timer(function (elapsed) {
				projection.rotate([0.025 * elapsed, -10, 0]);
				svg.selectAll("path").attr("d", path);
			});
		},
	}
}
</script>

<style>
.water {
	@apply fill-current text-dark;
}

.land {
	fill: rgb(248, 248, 248);
	stroke: rgb(116, 116, 116);
}

.land:hover {
	@apply fill-current text-gray-300;
}

.focused {
	fill: rgb(126, 126, 126);
}

.highlight {
	fill: #ff4000;
	stroke: rgb(48, 48, 48);
}

.highlight:hover {
	fill: #d93300;
}
</style>