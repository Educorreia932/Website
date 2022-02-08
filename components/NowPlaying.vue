<template>
	<div class="flex flex-row items-center space-x-3 mb-5" v-if="is_playing">
		<a :href="track.external_urls.spotify">
			<img :src="track.album.images[0].url" alt="" class="rounded-xl w-24 h-24">
		</a>

		<p class="text-lg m-0">
			<strong class="text-2xl">
				<a :href="track.external_urls.spotify">
					{{ track.name }}
				</a>
			</strong>

			<br />

			<span class="text-gray-light">by</span>
			<a :href="track.artists[0].external_urls.spotify">
				{{ track.artists[0].name }}
			</a>

			<br />

			<span class="text-gray-light">on</span>
			<a :href="track.album.external_urls.spotify">
				{{ track.album.name }}
			</a>

			<br />
		</p>
	</div>
</template>

<script>
import { getNowPlaying } from "@/plugins/spotify.js";

export default {
	name: "NowPlaying",
	data() {
		return {
			track: {},
			is_playing: false,
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

			console.log(item);
			this.track = item;
			this.is_playing = is_playing;
		},
	},
};
</script>

<style scoped>
a {
	@apply text-black dark:text-white;
}

a:hover {
	text-decoration: underline;
}
</style>

