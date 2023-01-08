<template>
	<div id="container">
		<NavigationTabs class="pt-6"/>

		<div id="content" class="relative">
			<header class="flex justify-between">
				<h1 class="truncate leading-normal">
					<span class="hidden md:inline">
						Eduardo Correia ￨
					</span>

					<ruby>{{ route.meta.title }}
						<rt>{{ route.meta.kana }}</rt>
					</ruby>
				</h1>

				<div class="space-x-5 flex content-center" style="font-size: 1.4em">
					<button
						@click="setColorTheme($colorMode.preference === 'dark'? 'light' : 'dark')"
					>
						<ruby class="under hidden dark:inline">
							日
							<rt>Light</rt>
						</ruby>

						<ruby class="under inline dark:hidden">
							月
							<rt>Dark</rt>
						</ruby>
					</button>
				</div>
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
const route = useRoute();

useHead({
	title: `Eduardo Correia`,
	meta: [
		{name: "twitter:title", content: `Eduardo Correia`},
		{name: "og:title", content: `Eduardo Correia`},
	],
});

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