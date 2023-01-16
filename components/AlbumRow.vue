<template>
	<div class="row">
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

<style scoped>
.row {
	@apply flex flex-row;
}

.album {
	@apply hover:mr-52 transition-all;

	&:not(:first-child) {
		@apply -ml-36;
	}

	img {
		height: 14rem;
		width: 14rem;
		
		@apply mx-auto rounded-lg cursor-pointer shadow-[-8px_0px_15px_rgba(0,0,0,0.3)];
	}
}
</style>