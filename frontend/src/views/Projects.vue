<template>
    <h1>My own creations
        <kaomoji category="cat"></kaomoji>
    </h1>

    <section class="container" :style="{ height: containerHeight }">
        <project-card v-for="i in projects.length" :key="i" :project="projects[i - 1]"
                      :style="{ order: (i - 1) % numberColumns + 1, width: (100 / numberColumns) - 1.5 + '%' }"
                      :ref="setProjectCardRef">
        </project-card>

        <span v-for="i in numberColumns - 1" :key="i" :style="{ order: i }" class="item break"></span>
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
        setProjectCardRef(el) {
            if (!this.projectCardsRefs.includes(el))
                this.projectCardsRefs.push(el)
        }
    },
    computed: {
        numberColumns() {
            return Math.round(this.windowWidth / 400)
        },
    },
    updated() {
        let heights = Array(this.numberColumns).fill(0)

        for (let i = 0; i < this.projectCardsRefs.length; i++) {
            const style = this.projectCardsRefs[i].$el.currentStyle || window.getComputedStyle(this.projectCardsRefs[i].$el);
            const marginTop = parseInt(style.marginTop.match(/\d+/g)[0]);
            const height = parseFloat(style.height.match(/\d+(.\d+)?/g)[0]);

            heights[i % this.numberColumns] += height + marginTop
        }

        this.containerHeight = Math.max(...heights) + "px";
    }
}
</script>

<style scoped>
.container {
    @apply flex flex-col flex-wrap space-y-6;
}

.break {
    @apply mx-3 w-0;
    flex-basis: 100%;
}
</style>