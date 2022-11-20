<template>
	<section v-if="isPlaying">
		<h2>
			Now playing

			<a style="color: #1DB954" href="https://open.spotify.com/user/skelozard">
				<FontAwesomeIcon
					:icon="['fab', 'spotify']"
					style="font-size: 25px; vertical-align: -0.25em"
					class="ml-1"
				/>
			</a>
		</h2>

		<div class="my-5">
			<div class="flex flex-row items-center space-x-3">
				<a :href="track.external_urls.spotify">
					<img
						alt="Album cover"
						class="cover"
						:src="track.album.images[0].url"
					>
				</a>

				<p class="text-lg m-0">
					<strong class="text-2xl">
						<a :href="track.external_urls.spotify">
							{{ track.name }}
						</a>
					</strong>

					<br/>

					<span class="text-gray dark:text-gray-light">by </span>

					<span v-for="(artist, i) in track.artists" :key="i">
						<template v-if="i > 0">,</template>
						<a :href="artist.external_urls.spotify">{{ artist.name }}</a>
					</span>

					<br/>

					<span class="text-gray dark:text-gray-light">on </span>

					<a :href="track.album.external_urls.spotify">
						{{ track.album.name }}
					</a>

					<br/>
				</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const {$getNowPlaying} = useNuxtApp();

let isPlaying = ref(false);
let track = ref(null);

$getNowPlaying()
	.then((response) => response.json())
	.then((data) => {
		const {item, is_playing} = data;

		isPlaying.value = is_playing;
		track.value = item;
	})
	.catch((error) => {
		console.log(error);
	});
</script>

<style scoped>
a {
	@apply text-black dark:text-white;
}

a:hover {
	text-decoration: underline;
}

.cover {
	@apply rounded-xl w-24 h-24;
	vertical-align: middle;
}
</style>