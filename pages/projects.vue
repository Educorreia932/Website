<template>
	<section>
		<h2>My own creations</h2>

		<ProjectCard
			v-for="(project, i) in projects"
			:key="i"
			:project="project"
		/>
	</section>
</template>

<script setup lang="ts">
import projects from "~/assets/json/projects.json";
import ProjectCard from "~/components/ProjectCard.vue";

definePageMeta({
	title: "Projects",
	kana: "事業"
})
</script>

<style scoped>

</style>