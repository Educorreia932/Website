<template>
	<div class="album">
		<img
			:src="album.image_url"
			:alt="`${album.name} cover`"
		>

		<button class="play-button" @click="playAlbum">
			<FontAwesomeIcon :icon="['fa-solid', 'fa-play']"/>
		</button>
	</div>
</template>

<script setup lang="ts">
import {Album} from "~/types/Album";
import {useMusicStore} from "~/stores/music-store";
import {ViewMode} from "~/enums/ViewMode";

const {album} = defineProps<{
	album: Album
}>();

const store = useMusicStore();

const playAlbum = () => {
	store.setCurrentViewMode(ViewMode.Carousel);
	store.setCurrentAlbum(album);
}
</script>

<style scoped>
.album {
	@apply transition-all relative;

	img {
		height: 100%;
		width: 100%;

		@apply mx-auto rounded-[12px] shadow-[-8px_0px_15px_rgba(0,0,0,0.3)];
	}
}

.play-button {
	@apply w-10 h-10 rounded-full bg-gray text-center absolute right-3 bottom-3;
}
</style>