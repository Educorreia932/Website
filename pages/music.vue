<template>
	<div>
		<portal to="h1">
			<h1 class="inline">
				Eduardo Correia |
				<ruby>
					Music
					<rt>音楽</rt>
				</ruby>
			</h1>
		</portal>

		<section>
			<h2>
				Now playing
				<a style="color: #1DB954" href="https://open.spotify.com/user/skelozard?si=bb7e9441d87941eb">
					<fa :icon="['fab', 'spotify']" style="font-size: 25px" class="ml-2" />
				</a>
			</h2>

			<now-playing />
		</section>

		<section>
			<h2>My favorite music albums</h2>

			<div id="albums">
				<div v-for="row in albums" class="albums-row">
					<a
						v-for="album in row"
						class="album"
						:href="album.url"
						:style="{
							backgroundImage: `url(${require('~/assets/images/albums/' + album.image)})`,
						}"
						target="_blank"
					>
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
	@apply md:space-y-5 pb-5;
}

.albums-row {
	@apply flex flex-row space-x-1 md:space-x-5;
}

.album {
	@apply text-white w-full rounded md:rounded-lg;
	background-size: cover;
	aspect-ratio: 1;
	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
}
</style>