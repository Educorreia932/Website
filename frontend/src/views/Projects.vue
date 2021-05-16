<template>
	<h1>My own creations</h1>

	<section id="projects">
		<project-card v-for="project in projects" :key="project.id" :project="project"></project-card>
	</section>
</template>

<script>
import Projects from "@/api/Projects";
import ProjectCard from "@/components/ProjectCard";

export default {
	name: "Projects",
	components: {ProjectCard},
	data() {
		return {
			projects: []
		}
	},
	mounted() {
		this.get();
	},
	methods: {
		get() {
			Projects.list().then((response) => {
				this.projects = response.data;
			});
		}
	}
}

</script>

<style scoped>
#projects {
	column-count: auto;
	column-width: 20rem;
	column-gap: 1.5em;
}
</style>