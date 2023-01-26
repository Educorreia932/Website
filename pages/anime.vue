<template>
	<section>
		<h2>
			My favorite anime & manga

			<a href="https://anilist.co/user/Skelozard/">
				<img
					alt="AniList icon"
					src="~/assets/images/anilist.svg"
					class="align-middle rounded"
					style="height: 28px"
				/>
			</a>
		</h2>

		<div id="cards">
			<div v-for="entry in anime">
				<nuxt-img
					:src="`/images/anime/${entry.image}`"
					class="w-full h-full object-cover rounded-lg aspect-square"
					format="webp"
					placeholder
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import anime from "~/assets/json/anime.json";

useHead({
	title: `Eduardo Correia | Anime & Manga`,
	meta: [
		{name: "twitter:title", content: `Eduardo Correia | Anime & Manga`},
		{name: "og:title", content: `Eduardo Correia | Anime & Manga`},
	],
});

definePageMeta({
	title: "Anime & Manga",
});
</script>

<style scoped>
h2 {
	@apply mb-5;
}

#cards {
	@apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-5;
}

.card {
	@apply text-white rounded-lg;
	background-position: center;
	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
}
</style>