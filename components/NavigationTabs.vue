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
const route = useRoute();

const pages = [
	{title: "Home", path: "/", icon: "house"},
	{title: "Projects", path: "/projects", icon: "pencil-ruler"},
	{title: "Travel", path: "/travel", icon: "plane"},
	{title: "Music", path: "/music", icon: "music"},
	{title: "Gaming", path: "/gaming", icon: "gamepad"},
	{title: "Anime & Manga", path: "/anime", icon: "tv"},
];

let currentIndex = ref(pages.findIndex(({title}) => title == route.meta.title));
</script>

<style scoped>
nav {
	@apply flex;
}

.tab {
	@apply bg-[#DCDCDC] dark:bg-[#363636] text-black dark:text-white px-4 md:px-5 py-1 rounded-t-lg opacity-60 transition-all;
	width: 5vw;

	&.active {
		@apply bg-white dark:bg-gray-dark opacity-100;
	}
}
</style>