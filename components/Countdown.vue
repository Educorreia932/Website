<template>
	<div id="progress-bar">
		<span id="after" :style="{ width: `${barWidth * 100}%` }"></span>
	</div>


	<p id="countdown">
		<span class="opacity-40">
			Finished degree in
			
			<template v-for="(value, key, i) in remaining" :key="i">
				{{ Math.floor(value) }}{{ key[0] }}{{ " " }}
			</template>
		</span>
	</p>
</template>

<script setup lang="ts">
const startDate = new Date(2018, 9, 1);
const endDate = new Date(2024, 8, 1);
const today = new Date();

const remainingMiliseconds = ref(endDate.getTime() - today.getTime());

const remaining = computed(() => ({
	days: remainingMiliseconds.value / (1000 * 60 * 60 * 24),
	hours: (remainingMiliseconds.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
	minutes: (remainingMiliseconds.value % (1000 * 60 * 60)) / (1000 * 60),
}));

const barWidth = computed(() => 1 - (remainingMiliseconds.value / (endDate.getTime() - startDate.getTime())));

onBeforeMount(() => {
	setInterval(() => {
		remainingMiliseconds.value -= 1000;
	}, 1000);
})
</script>

<style scoped>
#countdown {
	@apply mt-1 mb-0 text-center;
	font-size: 0.85em;
}

#progress-bar {
	@apply rounded-lg dark:bg-gray;
	background-color: #E8E8E8;
	height: 20px;
}

#after {
	@apply block h-full rounded-lg bg-gradient-to-r from-secondary to-primary;
}
</style>
