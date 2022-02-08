<template>
	<div class="flex flex-row items-center space-x-3 mb-5">
		<img :src="require('~/assets/images/albums/lateralus.jpg')" alt="" class="rounded-xl w-24 h-24">

		<p class="text-lg m-0">
			<strong class="text-2xl">{{ track }}</strong><br />
			<span class="text-gray-light">by</span> {{ artist }}<br />
			<span class="text-gray-light">on</span> {{ album }}<br />
		</p>
	</div>
</template>

<script>
import { getNowPlaying } from "@/plugins/spotify.js";

export default {
	name: "NowPlaying",
	data() {
		return {
			track: "Parabola",
			artist: "TOOL",
			album: "Lateralus",
		};
	},
	watch: {
		"$route.path"() {
			this.currentTrack();
		},
	},
	beforeMount() {
		this.currentTrack();
	},
	methods: {
		async currentTrack() {
			const response = await getNowPlaying();

			const { item, is_playing } = await response.json();

			this.track = item.name;
		},
	},
};
</script>

<style scoped>

</style>

