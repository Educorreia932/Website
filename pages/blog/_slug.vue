<template>
	<div>
		<portal to="h1">
			<ruby>
				Blog
				<rt>網誌</rt>
			</ruby>
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