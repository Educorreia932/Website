<template>
  <div>
    <h1>
      My own creations
      <kaomoji category="cat" />
    </h1>

    <section
      id="container"
      v-masonry
      transition-duration="0.2s"
      item-selector=".item"
      percent-position="true"
      ref="container"
      :gutter="spaceBetween"
    >
      <project-card
        class="item"
        v-masonry-tile
        v-for="i in projects.length"
        :key="i"
        :project="projects[i - 1]"
        :style="`width: ${itemWidth}px; margin-bottom: ${spaceBetween}px`"
      />
    </section>
  </div>
</template>

<script>
import Kaomoji from "@/components/Kaomoji";
import ProjectCard from "@/components/ProjectCard";
import Projects from "~/api/Projects";

export default {
  name: "Projects",
  components: {
    kaomoji: Kaomoji,
    "project-card": ProjectCard,
  },
  data() {
    return {
      projects: [],
      containerWidth: 0,
      spaceBetween: 20,
    };
  },
  mounted() {
    this.getData();

    new ResizeObserver(this.onResize).observe(
      document.getElementById("container")
    );
    this.onResize();
  },
  methods: {
    getData() {
      Projects.list().then((response) => {
        for (let project of response.data)
          project.image_url =
            process.env.VUE_APP_API_ENDPOINT + project.image_url;

        this.projects = response.data;
      });
    },
    onResize() {
      this.containerWidth = document.querySelector("main").offsetWidth;
    },
  },
  computed: {
    numberColumns() {
      return Math.round(this.containerWidth / 400);
    },
    itemWidth() {
      return (
        (this.containerWidth - this.numberColumns * this.spaceBetween) /
        this.numberColumns
      );
    },
  },
};
</script>

