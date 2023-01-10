<template>
	<div class="icon-bars">
		<span class="bar"></span>
		<span class="bar"></span>
		<span class="bar"></span>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
$size: 16px;
$speed: 0.8s;
$bar-width: ceil($size / 5);
$gutter-width: floor(($size - $bar-width * 3) / 2);
$bar-color: white;

@keyframes up-down {
	from {
		top: $size;
	}

	50% {
		top: 0;
	}

	to {
		top: $size;
	}
}

.icon-bars {
	@apply relative inline-block;
	width: $size;
	height: $size;

	.bar {
		@apply absolute bg-black dark:bg-white bottom-0 left-0 top-0;
		width: $bar-width;
		animation: up-down $speed infinite;

		&:nth-child(2) {
			left: $bar-width + $gutter-width;
			animation-delay: -$speed / 3 * 2;
		}

		&:nth-child(3) {
			left: $bar-width * 2 + $gutter-width  * 2;
			animation-delay: -$speed / 3;
		}
	}
}
</style>