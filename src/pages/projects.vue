<template>
	<div>
		<h1>
			My own creations
			<kaomoji category="cat"/>
		</h1>

		<section id="container" transition-duration="0s" v-masonry item-selector=".item" percent-position="true"
				 ref="container" :gutter="spaceBetween">
			<project-card class="item" v-masonry-tile v-for="project in projects" :key="project.id" :project="project"
						  :style="`width: ${itemWidth}px; margin-bottom: ${spaceBetween}px`"/>
		</section>
	</div>
</template>

<script>
import Kaomoji from "@/components/Kaomoji";
import ProjectCard from "@/components/ProjectCard";
import {PrismaClient} from '@prisma/client'
import axios from "axios";

export default {
	name: "Projects",
	head: {
		title: 'Projects | Eduardo Correia',
		meta: [
			{name: "twitter:title", content: "Projects | Eduardo Correia"},
			{property: "og:title", content: "Projects | Eduardo Correia"},
		],
	},
	components: {
		"kaomoji": Kaomoji,
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
		// Fetch data
		axios.get("/projects/list").then(response => {
			const projects = response.data

			for (const project of projects)
				project.image = require(`~/assets/images/projects/${project.image}`)

			this.projects = projects
		})

		new ResizeObserver(this.onResize).observe(
			document.getElementById("container")
		);

		this.onResize();
	},
	methods: {
		onResize() {
			this.containerWidth = document.querySelector("#container").offsetWidth;
		},
	},
	computed: {
		numberColumns() {
			return Math.round(this.containerWidth / 300);
		},
		itemWidth() {
			return ((this.containerWidth - this.numberColumns * this.spaceBetween) / this.numberColumns);
		},
	},
};
</script>

