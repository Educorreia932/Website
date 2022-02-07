<template>
	<div class="card">
		<h3>
			<nuxt-link :to="`blog/${post.slug}`">{{ post.title }}</nuxt-link>
		</h3>

		<p>Posted {{ formatDate(post.publishedAt) }}</p>
	</div>
</template>

<script>
export default {
	name: "ArticleCard",
	props: [
		"post",
	],
	methods: {
		formatDate(date) {
			const dateObject = new Date(date);

			const options = {
				year: "numeric",
				month: "long",
				day: "numeric",
			};

			return dateObject.toLocaleDateString("en-US", options);
		},
	},
};
</script>

<style scoped>
a {
	@apply text-white;
}

.card {
	@apply dark:bg-gray rounded-xl p-3;
	background-color: #ececec;
}

h3 {
	@apply m-0;
}

p {
	@apply m-0;
}
</style>