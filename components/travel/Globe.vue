<template>
	<svg id="globe" ref="globe" :viewBox="`0 0 ${width} ${height}`"></svg>
</template>

<script setup lang="ts">
import {
	drag,
	geoCentroid,
	geoOrthographic,
	geoPath,
	GeoPath,
	GeoProjection,
	interpolate,
	select,
	Selection,
	transition
} from "d3";
import {Feature} from "geojson";

import * as countries from "~/assets/json/countries.geo.json";

const {visitedCountries} = defineProps(["visitedCountries"]);
const emit = defineEmits(["hoveringCountry"]);

const width = 500;
const height = 500;

const globe = ref(null);

let svg: Selection<SVGElement, any, any, any>,
	projection: GeoProjection,
	path: GeoPath<any, any>;

const rotateGlobe = (p: [number, number]) => {
	transition()
		.duration(1000)
		.tween("rotate", () => {
			const interpolator = interpolate(projection.rotate(), [
				-p[0],
				-p[1],
			]);

			return (t: number) => {
				projection.rotate(interpolator(t) as [number, number]);
				svg.selectAll("path").attr("d", path);
			};
		});
};

const focusOnCountry = (id: string) => {
	const focusedCountry = countries.features.find((e) => e.id == id)!!;
	const centroid = geoCentroid(focusedCountry);

	rotateGlobe(centroid);
};

const highlightCountry = (id: string, highlight: boolean) => {
	const node = svg
		.selectAll("path")
		.filter((feature: Feature) => feature.id == id)
		.node();

	if (highlight)
		node?.classList.add("highlight");
	
	else
		node?.classList.remove("highlight");
};

const drawGlobe = () => {
	svg = select<SVGElement, any>(globe.value!);

	projection = geoOrthographic()
		.scale(250)
		.translate([width / 2, height / 2]);

	path = geoPath().projection(projection);

	svg.append("path")
		.datum({type: "Sphere"})
		.attr("class", "water")
		.attr("d", path);

	// Drawing countries
	svg.selectAll("path.land")
		.data(countries.features)
		.enter()
		.append("path")
		.attr("class", "land")
		.attr("d", path)
		.each((d, i, elements) => {
			// Visited countries
			if ((visitedCountries.map((e: { id: string; }) => e.id)).includes(d.id))
				select(elements[i])
					.attr("class", "visited")
					.on("mouseenter", (e) => {
						const country = e.target;

						if (country !== "undefined")
							emit("hoveringCountry", e.target);
					})
					.on("mouseleave", () => {
						emit("hoveringCountry", null);
					})
					.on("click", (e) => {
						focusOnCountry(e.target?.id);
					});
		});

	// Drag event
	svg.call(
		drag<SVGElement, any>().on("drag", (event) => {
			const rotate = projection.rotate();
			const k = 75 / projection.scale();

			projection.rotate([rotate[0] + event.dx * k, rotate[1] - event.dy * k]);

			path = geoPath().projection(projection);

			svg.selectAll("path").attr("d", path);
		}),
	);
}

defineExpose({
	focusOnCountry,
	highlightCountry,
});

onMounted( () => {
	drawGlobe()
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