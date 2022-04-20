<template>
	<div>
		<portal to="h1">
			<ruby class="under"
			>Anime
				<rt>アニメ</rt>
			</ruby>
			&
			<ruby class="under"
			>Manga
				<rt>漫画</rt>
			</ruby>
		</portal>

		<section>
			<h2>My favorite anime & manga</h2>

			<div id="games">
				<div v-for="entry in anime">
					<div class="game"
						 :title="entry.name"
						 :style="{
							backgroundImage: `url(${require('~/assets/images/anime/' + entry.image)})`,
						}"
					>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import {Portal} from "portal-vue";

import anime from "~/assets/json/anime.json";

export default {
	name: "AnimeManga",
	head: {
		title: "Anime & Manga | Eduardo Correia",
		meta: [
			{name: "twitter:title", content: "Anime & Manga | Eduardo Correia"},
			{property: "og:title", content: "Anime & Manga | Eduardo Correia"},
		],
	},
	components: {
		Portal,
	},
	data() {
		return {
			anime: anime,
		};
	},
}
</script>

<style scoped>
h2 {
	@apply mb-5;
}

#games {
	@apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-5;
}

.game {
	@apply text-white rounded-lg bg-cover;
	background-position: center;
	aspect-ratio: 1;
	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
}
</style>