<template>
	<div>
		<section>
			<h2>My favorite music albums</h2>

			<div>
				<CoverFlow/>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import music from "~/assets/json/music.json";

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
