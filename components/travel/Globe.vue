<template>
	<svg id="globe" ref="globe" :viewBox="`0 0 ${width} ${height}`"></svg>
</template>

<script setup lang="ts">
import * as d3 from "d3";
import {DSVRowString, GeoPath, GeoProjection, Selection} from "d3";
import {Feature, Geometry} from "geojson";
import * as topojson from "topojson-client";
import {GeometryCollection, Topology} from "topojson-specification";

const {visitedCountries} = defineProps(["visitedCountries"]);
const emit = defineEmits(["hoveringCountry"]);

const width = 500;
const height = 500;

const globe = ref(null);

let countries: Feature<Geometry, {}>[],
	countryNames: d3.DSVRowString[],
	worldData: Topology | undefined,
	svg: Selection<null, unknown, null, undefined>,
	projection: GeoProjection,
	path: GeoPath;

const country = (countryName: string): Feature<Geometry, {}> => {
	countryName = countryName.split("_").join(" ");
	const id = countryNames.find((country) => country.name === countryName)?.id;

	return countries.find((country) => country.id === id)!!;
};

const rotateGlobe = (p: [number, number]) => {
	d3.transition()
		.duration(1000)
		.tween("rotate", () => {
			const interpolator = d3.interpolate(projection.rotate(), [
				-p[0],
				-p[1],
			]);

			return (t: number) => {
				projection.rotate(interpolator(t) as [number, number]);
				svg.selectAll("path").attr("d", path);
			};
		});
};

const focusOnCountry = (countryName: string) => {
	const focusedCountry = country(countryName);
	const centroid = d3.geoCentroid(focusedCountry);

	rotateGlobe(centroid);
};

const highlightCountry = (countryName: string, highlight: boolean) => {
	const node = d3.selectAll<HTMLElement, HTMLElement>("#" + countryName.replace(" ", "_")).node();

	if (highlight)
		node?.classList.add("highlight");

	else
		node?.classList.remove("highlight");
};

defineExpose({
	focusOnCountry,
	highlightCountry,
});

onMounted(async () => {
	svg = d3.select(globe.value);

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
		d3.json<Topology>("https://unpkg.com/world-atlas@1/world/110m.json"),
		d3.tsv("https://raw.githubusercontent.com/KoGor/Map-Icons-Generator/master/data/world-110m-country-names.tsv"),
	]);

	countries = topojson.feature(
		worldData!!,
		worldData!!["objects"]["countries"] as GeometryCollection,
	).features;

	let countryById: { [key: string]: string } = {};

	countryNames.forEach((d: DSVRowString) => {
		countryById[d.id as string] = d.name as string;
	});

	// Drawing countries
	svg.selectAll("path.land")
		.data(countries)
		.enter()
		.append("path")
		.attr("class", "land")
		.attr("d", path)
		.each((d, i, elements) => {
			let countryName = "undefined";

			d.id = (d.id as string).replace(/^0+/, ""); // Removes leading zeros

			if (d.id in countryById)
				countryName = countryById[d.id];

			d3.select(elements[i]).attr("id", countryName.split(" ").join("_"));
			
			// Visited countries
			if ((visitedCountries.map((e: { name: any; }) => e.name)).includes(countryName))
				d3.select(elements[i])
					.attr("class", "visited")
					.on("mouseenter", (e) => {
						const countryName = e.target?.id.split("_").join(" ");

						if (countryName !== "undefined")
							emit("hoveringCountry", countryName);
					})
					.on("mouseleave", () => {
						emit("hoveringCountry", "");
					})
					.on("click", (e) => {
						focusOnCountry(e.target?.id);
					});
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

<style lang="scss">
#globe {
	@apply stroke-[0.5] stroke-white dark:stroke-gray-dark;

	path {
		@apply cursor-grab;

		&:active {
			@apply cursor-grabbing;
		}
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
}
</style>