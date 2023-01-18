<template>
	<div class="column relative">
		<div v-for="(album, j) in albums" :key="j" class="album snap-start">
			<img
				:src="album.image_url"
				:alt="`${album.name} cover`"
			>
		</div>
	</div>
</template>

<script setup lang="ts">
import {Album} from "~/types/Album";

const {albums} = defineProps<{
	albums: Album[];
}>();
</script>

<style scoped>
.column {
	@apply grid grid-rows-2 grid-flow-col gap-4;
}

.album {
	@apply transition-all;

	width: 12em;
	height: 12em;

	img {
		height: 100%;
		width: 100%;
		
		@apply mx-auto rounded-lg cursor-pointer shadow-[-8px_0px_15px_rgba(0,0,0,0.3)];
	}
}
</style>