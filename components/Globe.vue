<template>
	<svg id="globe" ref="globe" viewBox="0 0 500 500"></svg>
</template>

<script setup lang="ts">
import * as d3 from "d3";
import * as topojson from "topojson-client";
import {GeometryCollection, Topology} from "topojson-specification";

const {visitedCountries} = defineProps(["visitedCountries"]);
const emit = defineEmits(["hoveringCountry"]);

const width = 500;
const height = 500;

const globe = ref(null);

let countries = [];
let countryNames = [];
let worldData;
let svg;
let projection;
let path;

function country(countryName: string) {
	countryName = countryName.split("_").join(" ");
	const id = countryNames.find((country) => country.name === countryName).id;

	return countries.find((country) => country.id === id);
}

function rotateGlobe(p) {
	d3.transition()
		.duration(1000)
		.tween("rotate", () => {
			const interpolator = d3.interpolate(projection.rotate(), [
				-p[0],
				-p[1],
			]);

			return function (t) {
				projection.rotate(interpolator(t));
				svg.selectAll("path").attr("d", path);
			}.bind(this);
		});
}

function focusOnCountry(countryName: string) {
	const focusedCountry = country(countryName);
	const centroid = d3.geoCentroid(focusedCountry);

	rotateGlobe(centroid);
}

function highlightCountry(country, highlight) {
	const node = d3.selectAll<HTMLElement, HTMLElement>("#" + country.split(" ").join("_")).node();

	if (highlight)
		node.classList.add("highlight");

	else
		node.classList.remove("highlight");
}

onMounted(async () => {
	svg = d3.select(globe.value)
		.attr("width", width)
		.attr("height", height);

	projection = d3
		.geoOrthographic()
		.scale(250)
		.translate([width / 2, height / 2]);

	path = d3.geoPath().projection(projection);

	svg.append("path")
		.datum({type: "Sphere"})
		.attr("class", "water")
		.attr("d", path);

	[worldData, countryNames] = await Promise.all([
		d3.json("https://unpkg.com/world-atlas@1/world/110m.json"),
		d3.tsv("https://raw.githubusercontent.com/KoGor/Map-Icons-Generator/master/data/world-110m-country-names.tsv"),
	]);

	countries = topojson.feature(
		worldData as Topology,
		worldData["objects"]["countries"] as GeometryCollection,
	).features;

	let countryById = {};

	countryNames.forEach((d) => {
		countryById[d.id] = d.name;
	});

	// Drawing countries
	svg.selectAll("path.land")
		.data(countries)
		.enter()
		.append("path")
		.attr("class", "land")
		.attr("d", path)
		.on("click", (e) => {
			focusOnCountry(e.path[0].id);
		})
		.on("mouseenter", (e) => {
			const countryName = e.path[0].id.split("_").join(" ");

			if (countryName !== "undefined")
				emit("hoveringCountry", countryName);
		})
		.on("mouseleave", () => {
			emit("hoveringCountry", "");
		})
		.each((d, i, elements) => {
			let countryName = "undefined";

			d.id = (d.id as string).replace(/^0+/, ""); // Removes leading zeros

			if (d.id in countryById)
				countryName = countryById[d.id].split(" ").join("_");

			d3.select(elements[i]).attr("id", countryName);
		});

	d3.map(visitedCountries, (country: { name }) => {
		d3.selectAll("#" + country.name.split(" ").join("_"))
			.attr("class", "visited");
	});

	// Drag event
	svg.call(
		d3.drag().on("drag", (event) => {
			const rotate = projection.rotate();
			const k = 75 / projection.scale();

			projection.rotate([rotate[0] + event.dx * k, rotate[1] - event.dy * k]);

			path = d3.geoPath().projection(projection);

			svg.selectAll("path").attr("d", path);
		}),
	);
});
</script>

<style>
#globe {
	@apply stroke-[0.5] stroke-white;
}

html.dark #globe {
	stroke: #2f2f2f;
}

.water {
	@apply fill-white dark:fill-gray-dark;
}

.land {
	@apply fill-black dark:fill-white;
}

.visited {
	@apply fill-primary cursor-pointer;
}

.visited.highlight,
.visited:hover {
	@apply fill-secondary;
}
</style>