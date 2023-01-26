<template>
	<div class="album-grid">
		<AlbumItem v-for="(album, i) in albums" :key="i" :album="album"/>
	</div>
</template>

<script setup lang="ts">
import {Album} from "~/types/Album";
import AlbumItem from "~/components/music/AlbumItem.vue";

const {albums} = defineProps<{
	albums: Album[];
}>();
</script>

<style scoped lang="scss">
.album-grid {
	@apply grid grid-flow-row gap-3 lg:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4;
}
</style>