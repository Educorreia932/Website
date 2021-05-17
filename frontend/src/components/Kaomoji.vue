<template>
	<span>{{ kaomoji }}</span>
</template>

<script>
const kaomoji_json = require("../assets/kaomoji.json")["kaomoji"];

export default {
	name: "Kaomoji",
	props: ["category"],
	data() {
		return {
			kaomoji: kaomoji_json[this.category][0]
		}
	},
}
</script>

<style scoped>

</style>