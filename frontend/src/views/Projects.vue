<template>
    <h1>My own creations
        <kaomoji category="cat"></kaomoji>
    </h1>

    <section id="projects">
        <project-card v-for="project in projects" :key="project.id" :project="project"></project-card>
    </section>
</template>

<script>
import Kaomoji from "@/components/Kaomoji";
import Projects from "@/api/Projects";
import ProjectCard from "@/components/ProjectCard";

export default {
    name: "Projects",
    components: {
        "kaomoji": Kaomoji,
        "project-card": ProjectCard,
    },
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
                for (let project of response.data)
                    project.image_url = process.env.VUE_APP_API_ENDPOINT + project.image_url;

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