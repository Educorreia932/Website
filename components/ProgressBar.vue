<template>
	<div id="progress-bar">
		<span id="after" :style="{ width: `${width}%` }"></span>
	</div>
</template>

<script>
export default {
	name: "progress-bar",
	props: ["width"],
};
</script>

<style scoped>
#progress-bar {
	@apply rounded-lg dark:bg-gray;
	background-color: #e8e8e8;
	height: 20px;
}

#after {
	@apply block h-full rounded-lg bg-gradient-to-r from-secondary to-primary;
}
</style>
