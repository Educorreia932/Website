<template>
    <h1>My own creations
        <kaomoji category="cat"/>
    </h1>

    <section class="container" v-masonry transition-duration="0.2s" item-selector=".item" gutter="20" percent-position="true">
        <project-card class="item" v-masonry-tile v-for="i in projects.length" :key="i" :project="projects[i - 1]"/>
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
            projectCardsRefs: [],
            windowWidth: window.innerWidth,
            containerHeight: "100%"
        }
    },
    mounted() {
        this.getData();

        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })
    },
    methods: {
        getData() {
            Projects.list().then((response) => {
                for (let project of response.data)
                    project.image_url = process.env.VUE_APP_API_ENDPOINT + project.image_url;

                this.projects = response.data;
            });
        },
    },
    computed: {
        numberColumns() {
            return Math.round(this.windowWidth / 400)
        },
    },
}
</script>

<style scoped>
.item {
    width: 23%;
    margin-bottom: 20px;
}
</style>