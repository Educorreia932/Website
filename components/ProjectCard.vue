<template>
	<a
		class="project-card text-white"
		:href="project.project_url"
		target="_blank"
	>
		<img
			class="project-illustration"
			alt="Project Illustration"
			:src="require(`~/assets/images/projects/${project.image}`)"
		/>

		<section class="project-information">
			<h3>{{ project.title }}</h3>

			<p class="project-description">
				{{ project.description }}
			</p>

			<div class="flex">
				<div class="project-tags">
					<span v-for="tag in project.tags" :key="tag.id" class="project-tag">
						{{ tag }}
					</span>
				</div>
			</div>
		</section>
	</a>
</template>

<script>
export default {
	name: "ProjectCard",
	props: ["project"],
};
</script>

<style scoped>
.project-card {
	@apply inline-block text-black dark:text-white bg-white-dark dark:bg-gray rounded-xl transition transform hover:scale-105;
	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.1));
	vertical-align: top;
}

img {
	@apply w-full;
	border-radius: 10px 10px 0 0;
}

.project-information {
	padding: 0 1rem 1rem;
}

h3 {
	@apply m-0;
}

.project-information {
	padding: 0 1rem 1rem;
}

.project-information p {
	margin: 0 0 1rem;
	font-size: 0.9rem;
}

.project-tags {
	@apply flex uppercase;
}

.project-tag {
	@apply bg-primary text-white;
	padding: 0.2rem 0.5rem 0.1rem;
	margin-right: 0.8rem;
	border-radius: 3px;
	font-size: 0.8rem;
}

.project-anchor {
	color: gray;
}
</style>