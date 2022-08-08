<template>
	<div class="project-card">
		<img
			:src="imageURL"
			class="project-illustration"
			alt="Project Illustration"
		/>

		<section class="information">
			<h3>{{ project.title }}</h3>

			<p class="project-description">
				{{ project.description }}
			</p>

			<div class="flex flex-row">
				<div class="tags">
					<span v-for="(tag, i) in project.tags" :key="i" class="tag">
						{{ tag }}
					</span>
				</div>

				<a v-if="project.project_url !== ''" :href="project.project_url" target="_blank" class="anchor">
					<!--					<fa icon="link" class="float-right"/>-->
				</a>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import useAssets from "~/composables/useAssets";

const {project} = defineProps<{
	project: Project
}>();

const {images} = useAssets();

const imageURL = ref("");
const promise = images[`/assets/images/projects/${project.image}`]();

onServerPrefetch(async () => {
	imageURL.value = (await promise).default;
});
</script>

<style scoped lang="scss">
h3 {
	@apply m-0;
}

.project-card {
	@apply inline-block text-black dark:text-white bg-white-dark dark:bg-gray rounded-xl transition transform hover:scale-105;
	filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.1));
	vertical-align: top;
}

img {
	@apply w-full;
	border-radius: 10px 10px 0 0;
}

.information {
	padding: 0 1rem 1rem;

	p {
		margin: 0 0 1rem;
		font-size: 0.9rem;
	}
}

.tags {
	@apply flex uppercase;
}

.tag {
	@apply bg-primary text-white;
	padding: 0.2rem 0.5rem 0.1rem;
	margin-right: 0.8rem;
	border-radius: 3px;
	font-size: 0.8rem;
}

.anchor {
	@apply text-gray-light flex-1;
}
</style>