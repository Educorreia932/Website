<template>
	<section class="flex flex-col flex-1">
		<div class="flex justify-between mb-4">
			<h2 class="flex-0">My favorite music albums</h2>

			<button @click="changeViewMode">
				View mode
			</button>
		</div>

		<!--		<button @click="sortAlbums">-->
		<!--			<FontAwesomeIcon :icon="['fa-solid', 'sort']"/>-->
		<!--			Sort-->
		<!--		</button>-->

		<CoverFlow :albums="albums" v-if="currentViewMode === ViewMode.Carousel"/>

		<AlbumGallery :albums="albums" v-else/>
	</section>
</template>

<script setup lang="ts">
import music from "assets/json/music.json";
import {Ref} from "vue";
import {Album} from "~/types/Album";

enum ViewMode {
	Carousel,
	Gallery,
}

let albums: Ref<Album[]> = ref(music.albums);

definePageMeta({
	title: "Music",
	kana: "音楽",
});
</script>

<style scoped>
</style>
