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

		<section>
			<div v-for="post in posts" :key="post.title">
				{{ post.title }}
			</div>
		</section>
	</div>
</template>

<script>
import { Portal } from "portal-vue";

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
	},
	async asyncData({ $content }) {
		const posts = await $content("articles").fetch();

		console.log(posts)

		return {
			posts,
		};
	},
};
</script>

<style scoped>

</style>