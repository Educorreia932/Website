<template>
	<div class="flex flex-row">
		<img :src="require('~/assets/images/albums/lateralus.jpg')" alt="" class="rounded-xl w-24 h-24">

		<p>
			<strong>Fear Inoculum</strong>
			<br />
			<span class="text-gray-light">TOOL</span>
		</p>
	</div>
</template>

<script>
export default {
	name: "NowPlaying",
	data() {
		return {
			track: null,
			artist: null,
		};
	},
};
</script>

<style scoped>

</style>