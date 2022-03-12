<template>
	<div>
		<portal to="h1">
			<ruby>
				Travel
				<rt>旅行</rt>
			</ruby>
		</portal>

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

					<em v-if="!hoveredCountry">Hover over a flag</em>
					<span v-else>{{ this.hoveredCountry }}</span>
				</div>

				<globe id="globe" ref="globe" :visited-countries="visitedCountries" />
			</div>
		</section>
	</div>
</template>

<script>
import Globe from "../components/Globe";
import { Portal } from "portal-vue";
import travel from "~/assets/json/travel.json";

export default {
	name: "travel",
	head: {
		title: "Travel | Eduardo Correia",
		meta: [
			{ name: "twitter:title", content: "Travelling | Eduardo Correia" },
			{ property: "og:title", content: "Travelling | Eduardo Correia" },
		],
	},
	components: {
		Globe,
		Portal,
	},
	data() {
		return {
			hoveredCountry: "",
			visitedCountries: travel.visited,
		};
	},
	methods: {
		setHoveredCountry(country) {
			this.hoveredCountry = country;
			this.$refs.globe.highlightCountry(country, true);
		},
		resetHoveredCountry() {
			this.$refs.globe.highlightCountry(this.hoveredCountry, false);
			this.hoveredCountry = "";
		},
		globeFocus(country) {
			this.$refs.globe.focusOnCountry(country);
		},
	},
};
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