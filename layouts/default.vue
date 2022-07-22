<template>
	<div id="container">
		<div id="content">
			<header>
				<h1>Eduardo Correia |
					<ruby>{{ title }}
						<rt>{{ kana }}</rt>
					</ruby>
				</h1>

				<div class="float-right space-x-5">
					<button style="font-size: 1.3em" @click="changeMode">
						<span v-if="true">
							<ruby class="under">
								日
								<rt>Light</rt>
							</ruby>
						</span>

						<span v-else>
							<ruby class="under">
								夜
								<rt>Dark</rt>
							</ruby>
						</span>
					</button>

					<NuxtLink
						to="/"
						style="font-size: 1.3em"
						class="text-black dark:text-white"
					>
						<ruby class="under">
							家
							<rt>Home</rt>
						</ruby>
					</NuxtLink>
				</div>
			</header>

			<main>
				<slot/>
			</main>

			<footer>
				&copy; 2022 - Eduardo Correia
			</footer>
		</div>
	</div>
</template>

<script lang="ts" setup>
const route = useRoute();
const {title, kana} = route.meta;
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
	@apply text-center text-sm;
	color: #c8c8c8;
}
</style>