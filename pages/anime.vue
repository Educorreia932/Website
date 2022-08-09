<template>
	<section>
		<h2>
			My favorite anime & manga

			<a href="https://anilist.co/user/Skelozard/">
				<img
					alt="AniList icon"
					src="~assets/images/anilist.svg"
					class="align-middle rounded"
					style="height: 28px"
				/>
			</a>
		</h2>

		<div id="cards">
			<div v-for="entry in anime">
				<div
					class="card"
					:title="entry.name"
					:style="{
							backgroundImage: `url(${images[`/assets/images/anime/${entry.image}`].default})`,
						}"
				>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import anime from "~/assets/json/anime.json";

definePageMeta({
	title: "Anime & Manga",
	kana: "アニメ 漫画",
});

const {images} = useAssets();
</script>

<style scoped>
h2 {
	@apply mb-5;
}

#cards {
	@apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-5;
}

.card {
	@apply text-white rounded-lg bg-cover;
	background-position: center;
	aspect-ratio: 1;
	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
}
</style>