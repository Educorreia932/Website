<template>
	<div v-if="!$route.meta.plain_layout">
		<header>
			<nav>
				<router-link class="tab" :to="{ name: 'home' }">Introduction</router-link>
				<router-link class="tab" :to="{ name: 'about_me' }">About Me</router-link>
				<router-link class="tab" :to="{ name: 'projects' }">Projects</router-link>
			</nav>
		</header>

		<main>
			<router-view></router-view>
		</main>

		<footer class="text-center">
			<p>2021 - Eduardo Correia</p>
		</footer>
	</div>

	<div v-else>
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style>

</style>

