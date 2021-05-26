<template>
    <h1>My own creations
        <kaomoji category="cat"></kaomoji>
    </h1>

    <section class="container">
        <div v-for="project in projects" :key="project.id" class="item">
            <project-card :project="project"></project-card>
        </div>

        <span class="item break"></span>
        <span class="item break"></span>
        <span class="item break"></span>
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

<style>
.container {
    @apply flex flex-col flex-wrap space-y-6;
    height: 1700px;
}

.item {
    width: 23.5%;
}

.item:nth-of-type(4n+1) {
    order: 1;
}

.item:nth-of-type(4n+2) {
    order: 2;
}

.item:nth-of-type(4n+3) {
    order: 3;
}

.item:nth-of-type(4n) {
    order: 4;
}

.break {
    @apply mx-3;
    flex-basis: 100%;
    width: 0;
}

</style>