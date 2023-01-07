<template>
	<section class="flex flex-col flex-1">
		<h2 class="flex-0">My favorite music albums</h2>

		<div class="flex flex-col flex-1 justify-center">
			<CoverFlow/>
		</div>
		
		<div id="controls" class="space-x-2 text-gray-light">
			<FontAwesomeIcon :icon="['fa-solid', 'arrow-left']"/>
			<FontAwesomeIcon :icon="['fa-solid', 'arrow-up']"/>
			<FontAwesomeIcon :icon="['fa-solid', 'arrow-down']"/>
			<FontAwesomeIcon :icon="['fa-solid', 'arrow-right']"/>
			<FontAwesomeIcon :icon="['fa-solid', 'arrows-down-to-line']"/>
		</div>
	</section>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

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
