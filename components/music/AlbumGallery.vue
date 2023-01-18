<template>
	<div class="flex flex-row w-full">
		<div class="gallery snap-proximity snap-x">
			<section
				v-for="(key, i) in Object.keys(groupedAlbums).sort()"
				:key="i"
			>
				<div>
					<h3 class="mt-2 truncate">{{ key }}</h3>
				</div>

				<AlbumColumn :albums="groupedAlbums[key]"/>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import {groupBy} from "lodash";
import {storeToRefs} from "pinia";
import {SortingCriteria} from "~/enums/SortingCriteria";
import {useMusicStore} from "~/stores/music-store";
import {Album} from "~/types/Album";
import AlbumColumn from "~/components/music/AlbumColumn.vue";

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
	@apply flex flex-row overflow-y-hidden overflow-x-auto py-2;

	& > * {
		border-width: 1px;
		border-style: solid;
		border-left: 0;
		border-image: linear-gradient(rgba(0, 0, 0, 0), rgb(79, 79, 79, 0.5), rgba(0, 0, 0, 0)) 0 100%;
		@apply px-8;
	}
}
</style>