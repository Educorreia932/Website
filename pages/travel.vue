<template>
	<section class="flex flex-col flex-1">
		<h2>Where I've been to</h2>

		<div class="container">
			<div id="flags">
				<div>
					<button
						v-for="country in visitedCountries"
						class="flag-icon drop-shadow-xl"
						@click="globeFocus(country)"
						@mouseleave="resetHoveredCountry"
						@mouseover="setHoveredCountry(country)"
					>
						<country-flag
							:country="country.code" size="big"
							:class="`rounded-md ${hoveredCountry?.id === country?.id ? 'opacity-100': 'opacity-80'}`"
						/>
					</button>
				</div>

				<em v-if="!hoveredCountry">Hover over a flag/country</em>
				
				<span v-else>{{ hoveredCountry.name }}</span>
			</div>

			<Globe
				id="globe"
				ref="globe"
				:visitedCountries="visitedCountries"
				@hovering-country="(country) => {hoveredCountry = country}"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
import travel from "~/assets/json/travel.json";
import Globe from "~/components/travel/Globe.vue";

useHead({
	title: `Eduardo Correia | Travelling`,
	meta: [
		{name: "twitter:title", content: `Eduardo Correia | Travelling`},
		{name: "og:title", content: `Eduardo Correia | Travelling`},
	],
});

definePageMeta({
	title: "Travel",
});

type VisitedCountry = {
	code: string,
	name: string,
	id: string,
}

const visitedCountries = travel.visited;
const hoveredCountry = ref<VisitedCountry>();
const globe = ref<InstanceType<typeof Globe> | null>(null);

const setHoveredCountry = (country: VisitedCountry) => {
	hoveredCountry.value = country;
	
	globe.value.highlightCountry(country.id, true);
};

const resetHoveredCountry = () => {
	globe.value.highlightCountry(hoveredCountry.value?.id, false);
	
	hoveredCountry.value = undefined;
};

function globeFocus(country: {name: string, id: string}) {
	globe.value.focusOnCountry(country.id);
}
</script>

<style scoped>
.container {
	@apply flex flex-col flex-1 space-y-10 lg:flex-row items-center mt-3 h-full my-auto;
}

#flags {
	@apply flex flex-col max-w-[30rem] text-center;
}

.flag-icon {
	@apply mr-4 mb-3 drop-shadow-md;
}

#globe {
	@apply mx-3 sm:mx-14 lg:mx-0 max-h-[30rem] flex-1;
}
</style>
