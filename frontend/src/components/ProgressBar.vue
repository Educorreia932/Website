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
	width: 60%;
	height: 100%;
	border-radius: 9px;
	background: linear-gradient(45deg, #ffcc00, #ff6e2c);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0 0
	}
	100% {
		background-position: 100% 100%
	}
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