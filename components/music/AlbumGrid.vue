<template>
	<div class="album-grid">
		<div v-for="(album, j) in albums" :key="j" class="album">
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

<style scoped lang="scss">
$size: 12em;

.album-grid {
	@apply grid grid-flow-row gap-6 grid-cols-[repeat(auto-fill,_#{$size})];
}

.album {
	@apply transition-all;

	width: $size;
	height: $size;

	img {
		height: 100%;
		width: 100%;

		@apply mx-auto rounded-lg cursor-pointer shadow-[-8px_0px_15px_rgba(0,0,0,0.3)];
	}
}
</style>