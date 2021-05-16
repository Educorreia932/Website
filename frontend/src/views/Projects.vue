<template>
	<h1>My own creations</h1>
</template>

<script>
import Projects from "@/api/Projects";

export default {
	name: "Projects",
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

</style>