<template>
	<div id="container">
		<div id="content" class="relative">
			<header class="flex justify-between">
				<h1>
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
							夜
							<rt>Dark</rt>
						</ruby>
					</button>

					<NuxtLink
						to="/"
						class="text-black dark:text-white self-center"
					>
						<ruby class="under">
							家
							<rt>Home</rt>
						</ruby>
					</NuxtLink>
				</div>
			</header>

			<main class="my-3">
				<slot/>
			</main>

			<footer>
				<div>
					&copy; 2022 - Eduardo Correia
				</div>

				<div class="text-2xl space-x-3">
					<a href="https://github.com/Educorreia932" class="text-gray-dark dark:text-white">
						<FontAwesomeIcon :icon="['fab', 'github']"/>
					</a>

					<a href="linkedin.com/in/educorreia932/" class="text-gray-dark dark:text-white">
						<FontAwesomeIcon :icon="['fab', 'linkedin']"/>
					</a>

					<a href="https://www.instagram.com/educorreia932/" class="text-gray-dark dark:text-white">
						<FontAwesomeIcon :icon="['fab', 'instagram']"/>
					</a>
				</div>
			</footer>
		</div>
	</div>
</template>

<script lang="ts" setup>
const route = useRoute();

useHead({
	title: `Eduardo Correia`,
	meta: [
		{name: "twitter:title", content: `Eduardo Correia`},
		{name: 'og:title', content: `Eduardo Correia`},
	],
});

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
	@apply bg-white dark:bg-gray-dark px-5 sm:px-10 py-3 my-6 rounded-lg flex-1 flex flex-col;
}

main {
	@apply flex-1 flex flex-col;
}

footer {
	@apply text-center text-sm text-gray-dark dark:text-white opacity-50;
}
</style>