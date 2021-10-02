<template>
	<vue-world-cloud :words="words" font-family="Roboto" :spacing="0.9" />
</template>

<script>
import VueWordCloud from 'vuewordcloud';

export default {
	name: "GenresWordcloud",
	components: {
		"vue-world-cloud": VueWordCloud
	},
	props: ["topGenres"],
	data() {
		return {
			fontSizeMapper: word => word.value,
		}
	},
	computed: {
		words() {
			const words = [];

			for (const [key, value] of Object.entries(this.topGenres))
				words.push([key, value])

			return words;
		}
	}
}
</script>
