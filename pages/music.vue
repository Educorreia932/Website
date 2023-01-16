<template>
	<section class="flex flex-col flex-1">
		<div class="flex justify-between mb-4">
			<h2 class="flex-0">My favorite music albums</h2>

			<div class="view-mode">
				<button
					@click="currentViewMode = ViewMode.Gallery"
					:class="currentViewMode === ViewMode.Gallery? 'opacity-100': 'opacity-50'"
				>
					<FontAwesomeIcon :icon="['fa-solid', 'fa-list-ul']"/>
				</button>

				<button
					@click="currentViewMode = ViewMode.Carousel"
					:class="currentViewMode === ViewMode.Carousel? 'opacity-100': 'opacity-50'"
				>
					<FontAwesomeIcon :icon="['fa-solid', 'fa-headphones']"/>
				</button>
			</div>
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
let currentViewMode = ref(ViewMode.Carousel);

definePageMeta({
	title: "Music",
	kana: "音楽",
});
</script>

<style scoped>
.view-mode {
	@apply space-x-3;

	& > * {
		@apply w-5 h-5 p-2 text-center text-sm bg-white-dark dark:bg-gray rounded-full hover:opacity-100;
	}
}
</style>
