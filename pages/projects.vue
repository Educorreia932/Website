<template>
	<div>
		<portal to="h1">
			<h1 class="inline">
				Eduardo Correia |
				<ruby>
					Projects
					<rt>事業</rt>
				</ruby>
			</h1>
		</portal>

		<h2>My own creations</h2>

		<masonry
			class="py-5"
			:cols="{ default: 4, 1000: 3, 750: 2, 400: 1 }"
			:gutter="{ default: '30px', 750: '15px' }"
		>
			<project-card
				class="item"
				v-for="project in projects"
				:key="project.id"
				:project="project"
			/>
		</masonry>
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