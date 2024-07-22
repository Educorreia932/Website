<template>
	<div class="flex flex-col">
		<h2>
			Programming is like alchemy and I turn 0s and 1s into things in the internet
		</h2>

		<div class="text-center mt-6">
			<nuxt-img
				src="/images/space-foxes.png"
				alt="Avatar"
				width="300"
				height="300"
				format="png"
				placeholder
			/>
		</div>

		<p class="mt-12 text-center">
			Currently studying Computer Engineering at FEUP
		</p>

		<p class="mt-0 text-center">
			Interested in

			<span v-for="(topic, i) in topics" :key="i" style="display: inline-block">
				<span v-if="i === topics.length - 1">&nbsp;and </span><span v-else-if="i > 0">, </span>

				<NuxtLink :to="topic['endpoint']">
					<ruby class="under">
						{{ topic.text }}
						<rt>{{ topic.kana }}</rt>
					</ruby>
				</NuxtLink>
			</span>
		</p>
	</div>
</template>

<script lang="ts" setup>
useHead({
	title: `Eduardo Correia | Home`,
	meta: [
		{name: "twitter:title", content: `Eduardo Correia | Home`},
		{name: "og:title", content: `Eduardo Correia | Home`},
	],
});

definePageMeta({
	title: "Home",
});

const topics = [
	{
		endpoint: "projects",
		text: "building things",
	},
	{
		endpoint: "travel",
		text: "travelling",
	},
	{
		endpoint: "music",
		text: "music",
	},
	{
		endpoint: "gaming",
		text: "gaming",
	},
	{
		endpoint: "anime",
		text: "anime & manga",
	},
];
</script>
