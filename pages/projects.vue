<template>
	<section>
		<h2>My own creations</h2>

		<div class="my-5">
			<masonry-wall
				:items="projects.slice().reverse()"
				:ssr-columns="1"
				:column-width="300"
				:gap="20"
			>
				<template #default="{ item, index }">
					<ProjectCard :project="item" class="w-full"/>
				</template>
			</masonry-wall>
		</div>
	</section>
</template>

<script setup lang="ts">
import projects from "~/assets/json/projects.json";

useHead({
	title: `Eduardo Correia | Projects`,
	meta: [
		{name: "twitter:title", content: `Eduardo Correia | Projects`},
		{name: "og:title", content: `Eduardo Correia | Projects`},
	],
});

definePageMeta({
	title: "Projects",
});
</script>
