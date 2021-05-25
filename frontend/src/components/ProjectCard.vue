<template>
    <div class="project-card">
        <img class="project-illustration" alt="Project Illustration" :src="project.image_url">

        <div class="project-information">
            <h2>{{ project.title }}</h2>

            <p class="project-description">
                {{ project.description }}
            </p>

            <div class="project-tags">
				<span v-for="tag in project.tags" :key="tag" class="project-tag">
					{{ tag.name }}
				</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectCard",
    props: ["project"],
}
</script>

<style scoped>
.project-card {
    @apply inline-block bg-dark-light rounded-xl transition transform hover:scale-105;
    margin-bottom: 1.5rem;
    flex-shrink: 0;
    vertical-align: top;
}

.project-card img {
    width: 100%;
    border-radius: 10px 10px 0 0;
}

.project-information {
    padding: 0 1rem 1rem;
}

.project-card h2 {
    font-size: 100%;
    margin: 0.5rem 0 0.7rem;
}

.project-information {
    padding: 0 1rem 1rem;
}

.project-information p {
    margin: 0 0 1rem;
    font-size: 0.8rem;
}

.project-tags {
    @apply flex;
    text-transform: uppercase;
}

.project-tag {
    background-color: #d93300;
    padding: 0.2rem 0.5rem 0.1rem;
    margin-right: 0.8rem;
    border-radius: 3px;
    font-size: 0.8rem;
}
</style>