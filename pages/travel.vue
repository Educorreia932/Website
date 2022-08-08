<template>
	<div>
		<section>
			<h2>Where I've been to</h2>

			<div class="flex flex-col md:flex-row py-6">
				<div id="flags">
					<div id="flag-icons">
						<button
							v-for="country in visitedCountries"
							:class="`flag-icon flag-icon-${country.code}`"
							@click="globeFocus(country.name)"
							@mouseleave="resetHoveredCountry"
							@mouseover="setHoveredCountry(country.name)"
						></button>
					</div>

					<em v-if="!hoveredCountry">Hover over a flag/country</em>
					<span v-else>{{ this.hoveredCountry }}</span>
				</div>

				<Globe
					id="globe"
					ref="globe"
					:visitedCountries="visitedCountries"
					@hoveringCountry="(countryName) => {this.hoveredCountry = countryName}"
				/>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import travel from "~/assets/json/travel.json";

definePageMeta({
	title: "Travel",
	kana: "旅行",
});

const visitedCountries = travel.visited;
const hoveredCountry = ref("");
const globe = ref(null);

function setHoveredCountry(country) {
	hoveredCountry.value = country;
	globe.highlightCountry(country, true);
}

function resetHoveredCountry() {
	this.$refs.globe.highlightCountry(this.hoveredCountry, false);
	hoveredCountry.value = "";
}

function globeFocus(country) {
	globe.focusOnCountry(country);
}
</script>

<style scoped>
#flags {
	@apply flex flex-col md:ml-20 md:mt-16;
}

.flag-icon {
	@apply mr-4 mb-3 drop-shadow-md;
	font-size: 42px;
	border-radius: 5px;
}

#globe {
	@apply w-full mt-5 md:mt-0 md:ml-16;
}
</style>
