<template>
	<div class="gallery space-y-8 w-8/12 mx-auto">
		<section
			v-for="(key, i) in Object.keys(groupedAlbums).sort()"
			:key="i"
		>
			<h3 class="mt-0 mb-3 truncate">{{ key }}</h3>

			<AlbumGrid :albums="groupedAlbums[key]"/>
		</section>
	</div>
</template>

<script setup lang="ts">
import {groupBy} from "lodash";
import {storeToRefs} from "pinia";
import {SortingCriteria} from "~/enums/SortingCriteria";
import {useMusicStore} from "~/stores/music-store";
import {Album} from "~/types/Album";
import AlbumGrid from "~/components/music/AlbumGrid.vue";

const {albums} = defineProps<{
	albums: Album[]
}>();

const store = useMusicStore();

const {sortingCriteria} = storeToRefs(store);

const groupedAlbums = computed(() => {
	switch (sortingCriteria.value) {
		case SortingCriteria.Artist:
			return groupBy(albums, ({artist}) => artist);

		case SortingCriteria.Title:
			return groupBy(albums, ({name}) => name[0].toUpperCase());

		case SortingCriteria.Date:
			return groupBy(albums, ({release_date}) => (new Date(release_date).getUTCFullYear()));
	}
});
</script>

<style scoped>
.gallery {
	@apply flex flex-col py-2;
}

h3 {
	@apply text-2xl;
}
</style>