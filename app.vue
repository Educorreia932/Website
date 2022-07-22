<template>
	<div>
		<NuxtLayout>
			<NuxtPage/>
		</NuxtLayout>
	</div>
</template>

<script lang="ts" setup>
const route = useRoute()
const title = `${route.meta.title} | Eduardo Correia`

useHead({
	title: title,
	meta: [
		{name: "twitter:title", content: title},
		{name: 'og:title', content: title}
	]
})

definePageMeta({
	colorMode: 'light',
})
</script>
