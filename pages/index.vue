<template>
	<div class="flex flex-col">
		<h2>
			Programming is like alchemy and I turn 0s and 1s into things in the internet
		</h2>

		<div class="text-center mt-6">
			<nuxt-img
				src="/images/avatar.png"
				alt="Avatar"
				width="250"
				height="250"
				format="webp"
				placeholder
			/>
		</div>

		<p class="mb-2 text-center">
			Currently attending a Master's Degree in Informatics and Computing Engineering in
			<a href="https://sigarra.up.pt/feup/">FEUP</a>
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

		<div class="mt-4 md:w-7/12 w-full mx-auto">
			<UniversityCountdown/>
		</div>
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	title: "Home",
	kana: "家",
});

const topics = [
	{
		endpoint: "projects",
		text: "building things",
		kana: "事業",
	},
	{
		endpoint: "travel",
		text: "travelling",
		kana: "旅行",
	},
	{
		endpoint: "music",
		text: "music",
		kana: "音楽",
	},
	{
		endpoint: "gaming",
		text: "gaming",
		kana: "ゲーム",
	},
	{
		endpoint: "anime",
		text: "anime & manga",
		kana: "アニメ 漫画",
	},
];
</script>
