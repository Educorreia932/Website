<template>
	<div class="flex flex-row items-center space-x-3 mb-5">
		<img :src="require('~/assets/images/albums/lateralus.jpg')" alt="" class="rounded-xl w-24 h-24">

		<p class="text-lg m-0">
			<strong class="text-2xl">Parabola</strong><br />
			<span class="text-gray-light">by</span> TOOL<br />
			<span class="text-gray-light">on</span> Lateralus<br />
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