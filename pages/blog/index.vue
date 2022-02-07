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

		<section class="space-y-4">
			<article-card v-for="post in posts" :key="post.title" :post="post" />
		</section>
	</div>
</template>

<script>
import { Portal } from "portal-vue";
import ArticleCard from "@/components/ArticleCard.vue";

export default {
	name: "blog",
	head: {
		title: "Blog | Eduardo Correia",
		meta: [
			{ name: "twitter:title", content: "Blog | Eduardo Correia" },
			{ property: "og:title", content: "Blog | Eduardo Correia" },
		],
	},
	components: {
		Portal,
		ArticleCard,
	},
	async asyncData({ $content }) {
		const posts = await $content("articles").fetch();

		return {
			posts,
		};
	},
};
</script>

<style scoped>

</style>