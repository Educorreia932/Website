<template>
	<div>
		<portal to="h1">
			<ruby>
				Projects
				<rt>事業</rt>
			</ruby>
		</portal>

		<h2>My own creations</h2>

		<client-only>
			<masonry
				:cols="{ default: 4, 1000: 3, 750: 2, 400: 1 }"
				:gutter="{ default: '30px', 750: '15px' }"
				class="py-5"
			>
				<project-card
					v-for="project in projects"
					:key="project.id"
					:project="project"
					class="item"
				/>
			</masonry>
		</client-only>
	</div>
</template>

<script>
import { Portal } from "portal-vue";
import projects from "~/assets/json/projects.json";

export default {
	name: "projects",
	head: {
		title: "Projects | Eduardo Correia",
		meta: [
			{ name: "twitter:title", content: "Projects | Eduardo Correia" },
			{ property: "og:title", content: "Projects | Eduardo Correia" },
		],
	},
	components: {
		Portal,
	},
	data() {
		return {
			projects: projects.reverse(),
		};
	},
};
</script>

<style scoped>
.project-card {
	margin-bottom: 30px;
}

@media (max-width: 750px) {
	.project-card {
		margin-bottom: 15px;
	}
}
</style>