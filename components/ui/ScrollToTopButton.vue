<template>
	<button
		ref="button"
		class="fixed bottom-5 right-5 drop-shadow-xl bg-white dark:bg-black rounded-full w-10 h-10 text-center hidden"
		@click="scrollToTop"
	>
		<FontAwesomeIcon :icon="['fa', 'arrow-up']"/>
	</button>
</template>

<script setup lang="ts">
const button = ref();
const scrollThreshold = 50;

const userScroll = () => {
	if (window.scrollY > scrollThreshold)
		button.value.classList.remove("hidden");

	else
		button.value.classList.add("hidden");
};

const scrollToTop = () => {
	window.scrollTo({top: 0, behavior: "smooth"});
};

onMounted(() => {
	window.addEventListener("scroll", userScroll);
});

onBeforeMount(() => {
	window.removeEventListener("scroll", userScroll);
});
</script>

<style scoped>

</style>