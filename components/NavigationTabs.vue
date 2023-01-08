<template>
	<nav class="space-x-2">
		<NuxtLink
			v-for="(page, i) in pages"
			:key="i"
			:class="`tab ${i === currentIndex? 'active' : ''}`"
			:to="page.path"
			@click="currentIndex = i"
		>
			<FontAwesomeIcon :icon="['fa', page.icon]"/>
		</NuxtLink>
	</nav>
</template>

<script setup lang="ts">
let currentIndex = ref(0);

const pages = [
	{path: "/", icon: "house"},
	{path: "projects", icon: "pencil-ruler"},
	{path: "travel", icon: "plane"},
	{path: "music", icon: "music"},
	{path: "gaming", icon: "gamepad"},
	{path: "anime", icon: "tv"},
];
</script>

<style scoped>
nav {
	@apply flex;
}

.tab {
	@apply bg-gray px-5 py-1 text-white rounded-t-lg opacity-50 transition-all;
	background-color: #363636;

	&.active {
		@apply bg-gray-dark opacity-100;
	}
}
</style>