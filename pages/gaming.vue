<template>
	<section>
		<h2>My favorite games</h2>

		<div id="games">
			<div v-for="game in games" class="game" :title="game.name">
				<nuxt-img
					:src="`/images/games/${game.image}`"
					class="w-full h-full object-cover rounded-lg aspect-square"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import gaming from "~/assets/json/gaming.json";

definePageMeta({
	title: "Gaming",
});

const games = gaming.games;
</script>

<style scoped>
h2 {
	@apply mb-5;
}

#games {
	@apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-5;
}

.game {
	background-position: center;
	aspect-ratio: 1;
	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
}
</style>