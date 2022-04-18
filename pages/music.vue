<template>
	<div>
		<portal to="h1">
			<ruby>
				Music
				<rt>音楽</rt>
			</ruby>
		</portal>

		<section>
			<now-playing />
		</section>

		<section>
			<h2>My favorite music albums</h2>

			<div id="albums">
				<div v-for="album in albums">
					<a
						:href="album.url"
						:title="`${album.title} - ${album.artist}`"
						class="h-full w-full"
						target="_blank"
					>
						<div class="album"
							 :style="{
								backgroundImage: `url(${require('~/assets/images/albums/' + album.image)})`,
							}"
						>
						</div>
					</a>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { Portal } from "portal-vue";
import music from "~/assets/json/music.json";
import NowPlaying from "@/components/NowPlaying.vue";

export default {
	name: "Music",
	head: {
		title: "Music | Eduardo Correia",
		meta: [
			{ name: "twitter:title", content: "Music | Eduardo Correia" },
			{ property: "og:title", content: "Music | Eduardo Correia" },
		],
	},
	components: {
		Portal,
		NowPlaying,
	},
	data() {
		return {
			albums: music.albums,
		};
	},
};
</script>

<style scoped>
h2 {
	@apply mb-5;
}

#albums {
	@apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-5;
}

.album {
	@apply text-white rounded-lg bg-cover;
	aspect-ratio: 1;
	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
}
</style>