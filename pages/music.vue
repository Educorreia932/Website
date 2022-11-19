<template>
	<div>
		<NowPlaying/>

		<section>
			<h2>My favorite music albums</h2>

			<div id="albums">
				<div v-for="album in albums">
					<a
						:href="album.url"
						:title="`${album.title} - ${album.artist}`"
						class="h-full w-full"
						target="_blank"
					>
						<nuxt-img
							class="album"
							:src="`/images/albums/${album.image}`"
							format="webp"
							placeholder
						/>
					</a>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import music from "~/assets/json/music.json";

definePageMeta({
	title: "Music",
	kana: "音楽",
});

const albums = music.albums;

const {images} = useAssets();
</script>

<style scoped>
h2 {
	@apply mb-5;
}

#albums {
	@apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4;
}

.album {
	@apply text-white rounded-lg w-full h-full;
	aspect-ratio: 1;
	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
}
</style>
