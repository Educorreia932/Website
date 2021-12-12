<template>
	<div id="container">
		<div id="content">
			<header>
				<portal-target name="h1" class="inline" />

				<div class="float-right space-x-5">
					<button style="font-size: 1.3em" @click="changeMode">
						<span v-if="this.$colorMode.preference === 'dark'">
							<ruby class="under"
								>日
								<rt>Light</rt>
							</ruby>
						</span>

						<span v-else>
							<ruby class="under"
								>夜
								<rt>Dark</rt>
							</ruby>
						</span>
					</button>

					<nuxt-link to="/" style="font-size: 1.3em" class="text-black dark:text-white">
						<ruby class="under"
							>家
							<rt>Home</rt>
						</ruby>
					</nuxt-link>
				</div>
			</header>

			<div class="flex-1 flex flex-col">
				<nuxt />
			</div>

			<footer>&copy; 2021 - Eduardo Correia</footer>
		</div>
	</div>
</template>

<script>
import { PortalTarget } from "portal-vue";

export default {
	components: {
		PortalTarget,
	},
	methods: {
		changeMode() {
			this.$colorMode.preference = this.$colorMode.preference === "light" ? "dark" : "light";
		},
	},
};
</script>

<style>
body {
	@apply font-kozuka text-black dark:text-white m-0 dark:bg-gray;
	background-color: #e8e8e8;
	font-size: 20px;
}

#container {
	@apply px-0 sm:px-20 min-h-screen flex flex-col;
	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
}

#content {
	@apply bg-white dark:bg-gray-dark px-5 sm:px-10 py-3 my-6 rounded-lg flex-1 flex flex-col;
}

a {
	@apply text-primary no-underline;
}

h1 {
	@apply m-0 inline;
}

h2 {
	@apply pl-2 m-0 text-gray-light;
	border-left: 2px solid;
	font-size: 1.3rem;
	font-weight: normal;
}

ruby {
	ruby-align: center;
}

ruby.under {
	ruby-position: under;
}

rt {
	@apply text-center text-black dark:text-white;
	font-weight: lighter;
	font-size: 0.7em;
}

button {
	all: unset;
	@apply cursor-pointer;
}

footer {
	@apply text-center text-sm;
	color: #c8c8c8;
}
</style>
