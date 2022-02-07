<template>
	<div>
		<portal to="h1">
			<h1 class="inline">
				Eduardo Correia |
				<ruby>
					Blog
					<rt>網誌</rt>
				</ruby>
			</h1>
		</portal>

		<article>
			<nuxt-content :document="article" />
		</article>
	</div>
</template>

<script>
import { Portal } from "portal-vue";

export default {
	components: {
		Portal,
	},
	async asyncData({ $content, params }) {
		const article = await $content("articles", params.slug).fetch();

		return { article };
	},
};
</script>