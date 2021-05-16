<template>
	<div class="project-card">
		<img class="project-illustration" alt="Project Illustration" src=/static/images/Projects/Umbrella.png>

		<div class="project-information">
			<h2>{{ project.title }}</h2>

			<p class="project-description">Game developed for Global Game Jam 2021.</p>

			<div class="project-tags">
                <span class="project-tag">
                    Game
                </span>

				<span class="project-tag">
                    Game-Jam
                </span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProjectCard",
	props: ["project"]
}
</script>

<style scoped>
.project-card {
	display: inline-block;
	background-color: #333333;
	border-radius: 10px;
	transition: all 0.5s;
	margin-bottom: 1.5rem;
	flex-shrink: 0;
	vertical-align: top;
}

.project-card:hover {
	transform: scale(1.02);
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
	display: flex;
	text-transform: uppercase;
}

.project-tag {
	background-color: #d93300;
	padding: 0.2rem 0.5rem 0.1rem;
	margin-right: 0.8rem;
	width: auto;
	border-radius: 3px;
	font-size: 0.8rem;
}
</style>