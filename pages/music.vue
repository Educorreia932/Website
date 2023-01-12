<template>
	<section class="flex flex-col flex-1">
		<h2 class="flex-0">My favorite music albums</h2>

		<div class="flex flex-col flex-1 justify-center">
			<CoverFlow :albums="albums"/>
		</div>
	</section>
</template>

<script setup lang="ts">
import music from "assets/json/music.json";
import {Ref} from "vue";
import {Album} from "~/types/Album";
let albums: Ref<Album[]> = ref(music.albums);

definePageMeta({
	title: "Music",
	kana: "音楽",
});
</script>

<style scoped>
h2 {
	@apply mb-5;
}
</style>
