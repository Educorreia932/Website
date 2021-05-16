<template>
	<div id="progress-bar" class="w-9/12 mx-auto has-tooltip">
		<span id="progress-percentage" class="tooltip">{{ `${width}%` }}</span>
		<span id="after" class="block" :style="{width: `${width}%`}"></span>
	</div>
</template>

<script>
export default {
	name: 'ProgressBar',
	props: ["width"],
}
</script>

<style>
#progress-bar {
	background: #333;
	border-radius: 13px;
	height: 20px;
	padding: 3px;
	position: relative;
}

#after {
	background: linear-gradient(to right, #ffcc00 0%, #ff9966 100%);
	width: 60%;
	height: 100%;
	border-radius: 9px;
}

.tooltip {
	@apply opacity-0 absolute z-50 py-1.5;
	left: 50%;
	width: 120px;
	margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
	background-color: #555;
	border-radius: 6px;
	bottom: 125%;
	transition: opacity 0.3s;
}

.has-tooltip:hover .tooltip {
	@apply opacity-100;
}
</style>