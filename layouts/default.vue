<template>
	<div id="container">
		<NavigationTabs class="pt-6"/>

		<div id="content" class="relative">
			<header class="flex justify-between">
				<h1 class="truncate leading-normal">
					<span class="hidden md:inline">
						Eduardo Correia ￨
					</span>

					{{ route.meta.title }}
				</h1>

				<button
					@click="setColorTheme($colorMode.preference === 'dark'? 'light' : 'dark')"
					style="font-size: 1.4em"
				>
					<div class="flex flex-col items-center">
						<span>{{ isDark() ? "日" : "月" }}</span>
						<span style="font-size: 0.7em">{{ isDark() ? "Light" : "Dark" }}</span>
					</div>
				</button>
			</header>

			<main class="my-3">
				<slot/>
			</main>

			<footer>
				<div class="text-2xl space-x-3">
					<a
						v-for="(socialLink, i) in socialLinks"
						:key="i"
						class="social-link"
						:href="socialLink.url"
						:title="socialLink.name"
					>
						<FontAwesomeIcon :icon="['fab', socialLink.icon]"/>
					</a>
				</div>

				<div class="opacity-50">
					&copy; 2022 - Eduardo Correia
				</div>
			</footer>
		</div>

		<ScrollToTopButton/>
	</div>
</template>

<script lang="ts" setup>
import NavigationTabs from "~/components/ui/NavigationTabs.vue";
import ScrollToTopButton from "~/components/ui/ScrollToTopButton.vue";

const route = useRoute();

const socialLinks = ref([
	{
		name: "Github",
		icon: "github",
		url: "https://github.com/Educorreia932",
	},
	{
		name: "LinkedIn",
		icon: "linkedin",
		url: "https://linkedin.com/in/educorreia932",
	},
	{
		name: "Instagram",
		icon: "instagram",
		url: "https://www.instagram.com/educorreia932",
	},
]);

type Theme = "light" | "dark";

const setColorTheme = (newTheme: Theme) => {
	useColorMode().preference = newTheme;
};

const isDark = () => useColorMode().value === "dark";
</script>

<style scoped>
#container {
	@apply px-0 sm:px-20 min-h-screen flex flex-col drop-shadow-lg;
}

#content {
	@apply bg-white dark:bg-gray-dark px-5 sm:px-10 py-3 mb-6 rounded-b-lg rounded-tr-lg flex-1 flex flex-col;
}

main {
	@apply flex-1 flex flex-col;
}

footer {
	@apply text-center text-sm text-gray-dark dark:text-white;
}

.social-link {
	@apply text-gray-dark dark:text-white transition-opacity opacity-50 hover:opacity-100;
}
</style>