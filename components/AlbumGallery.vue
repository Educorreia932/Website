<template>
	<div class="flex flex-row w-full">
		<div class="gallery">
			<section
				v-for="(albums, key, i) in groupedAlbums()"
				:key="i"
			>
				<h3 class="mt-2">{{ key }}</h3>

				<AlbumColumn :albums="albums"/>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import {groupBy} from "lodash";
import {SortingCriteria} from "~/enums/SortingCriteria";
import {useMusicStore} from "~/stores/music-store";
import {Album} from "~/types/Album";

const {albums} = defineProps<{
	albums: Album[]
}>();

const store = useMusicStore();

const groupedAlbums = () => {
	switch (store.sortingCriteria) {
		case SortingCriteria.Artist:
			return groupBy(albums, ({artist}) => artist);

		case SortingCriteria.Title:
			return groupBy(albums, ({name}) => name[0]);

		case SortingCriteria.Date:
			return groupBy(albums, ({release_date}) => (new Date(release_date).getUTCFullYear()));
	}
};

</script>

<style scoped>
.gallery {
	@apply flex flex-row overflow-hidden;

	& > * {
		border-width: 1px;
		border-style: solid;
		border-left: 0;
		border-image: linear-gradient(rgba(0, 0, 0, 0), rgb(79, 79, 79, 0.5), rgba(0, 0, 0, 0)) 0 100%;
		@apply px-8;
	}
}
</style>