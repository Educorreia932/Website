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
.album-grid {
	@apply grid grid-flow-row gap-3 xl:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4;
}

.album {
	@apply transition-all;

	img {
		height: 100%;
		width: 100%;

		@apply mx-auto rounded-[12px] cursor-pointer shadow-[-8px_0px_15px_rgba(0,0,0,0.3)];
	}
}
</style>