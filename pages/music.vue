<template>
	<section class="flex flex-col flex-1">
		<div class="flex justify-between mb-4">
			<h2 class="flex-0">My favorite music albums</h2>

			<div class="flex flex-row space-x-3">
				<!--				<div>-->
				<!--					<label for="sort">-->
				<!--						<FontAwesomeIcon :icon="['fa-solid', 'sort']"/>-->
				<!--					</label>-->

				<!--					<select id="sort" @change="(event) => store.setSortingCriteria(event.target.value)">-->
				<!--						<option :value="SortingCriteria.Artist">Artist</option>-->
				<!--						<option :value="SortingCriteria.Title">Title</option>-->
				<!--						<option :value="SortingCriteria.Date">Date of release</option>-->
				<!--					</select>-->
				<!--				</div>-->

				<div class="view-mode">
					<button
						@click="store.setCurrentViewMode(ViewMode.Gallery)"
						:class="store.currentViewMode === ViewMode.Gallery? 'opacity-100': 'opacity-50'"
					>
						<FontAwesomeIcon :icon="['fa-solid', 'fa-list-ul']"/>
					</button>

					<button
						@click="store.setCurrentViewMode(ViewMode.Carousel)"
						:class="store.currentViewMode === ViewMode.Carousel? 'opacity-100': 'opacity-50'"
					>
						<FontAwesomeIcon :icon="['fa-solid', 'fa-headphones']"/>
					</button>
				</div>
			</div>
		</div>

		<CoverFlow :albums="albums" v-if="store.currentViewMode === ViewMode.Carousel"/>

		<AlbumGallery :albums="albums" v-else/>
	</section>
</template>

<script setup lang="ts">
import music from "assets/json/music.json";
import {Ref} from "vue";
import {ViewMode} from "~/enums/ViewMode";
import {useMusicStore} from "~/stores/music-store";
import {Album} from "~/types/Album";
import AlbumGallery from "~/components/music/AlbumGallery.vue";
import CoverFlow from "~/components/music/CoverFlow.vue";

let albums: Ref<Album[]> = ref(music.albums);

const store = useMusicStore();

// watchEffect(() => {
// 	switch (store.sortingCriteria) {
// 		case SortingCriteria.Artist:
// 			albums.value.sort((a, b) => (a.artist > b.artist) ? 1 : ((b.artist > a.artist) ? -1 : 0));
// 			break;
//
// 		case SortingCriteria.Title:
// 			albums.value.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
// 			break;
//
// 		case SortingCriteria.Date:
// 			albums.value.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
// 			break;
// 	}
// });

useHead({
	title: `Eduardo Correia | Music`,
	meta: [
		{name: "twitter:title", content: `Eduardo Correia | Music`},
		{name: "og:title", content: `Eduardo Correia | Music`},
	],
});

definePageMeta({
	title: "Music",
});
</script>

<style scoped>
.view-mode {
	@apply space-x-2 flex flex-row;

	& > * {
		@apply w-5 h-5 p-2 text-center text-sm bg-white-dark dark:bg-gray rounded-full hover:opacity-100;
	}
}
</style>
