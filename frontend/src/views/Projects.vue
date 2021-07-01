<template>
    <h1>My own creations
        <kaomoji category="cat"></kaomoji>
    </h1>

    <section class="container">
        <project-card v-for="i in projects.length" :key="i" :project="projects[i - 1]"
                      :style="{ order: (i - 1) % numberColumns + 1, width: '23.5%' }">
        </project-card>

        <span v-for="i in numberColumns - 1" :key="i" :style="{ order: i}" class="item break"></span>
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
            projects: [],
            numberColumns: 4
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

<style>
.container {
    @apply flex flex-col flex-wrap space-y-6;
    height: 2200px;
}

.item {
    width: 23.5%;
}

.break {
    @apply mx-3;
    flex-basis: 100%;
    width: 0;
}
</style>