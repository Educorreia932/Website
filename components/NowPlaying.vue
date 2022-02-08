<template>
	<div>
		<h2>
			{{ is_playing ? "Now playing" : "Music on pause" }}

			<a style="color: #1DB954" href="https://open.spotify.com/user/skelozard?si=bb7e9441d87941eb">
				<fa :icon="['fab', 'spotify']" style="font-size: 25px" class="ml-2" />
			</a>
		</h2>

		<div class="my-5">
			<div class="flex flex-row items-center space-x-3" v-if="is_playing">
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

			<template v-else>
				<content-placeholders :rounded="true" class="w-80 ">
					<content-placeholders-heading :img="true" />
				</content-placeholders>
			</template>
		</div>
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
	beforeMount() {
		this.currentTrack();
	},
	methods: {
		async currentTrack() {
			const response = await getNowPlaying();

			const { item, is_playing } = await response.json();

			this.track = item;
			this.is_playing = is_playing;
		},
	},
	mounted() {
		setInterval(function() {
			this.currentTrack();
		}.bind(this), 1000);
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

