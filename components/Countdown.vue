<template>
	<p id="countdown">
		{{ `${days}d ${hours}h ${minutes}m ${seconds}s` }} until I end my university course
	</p>
</template>

<script>
export default {
	name: "Countdown",
	props: ["end_date"],
	data() {
		return {
			totalMilliseconds: this.end_date.getTime() - new Date().getTime(),
		};
	},
	computed: {
		days() {
			return Math.floor(this.totalMilliseconds / (1000 * 60 * 60 * 24));
		},
		hours() {
			return Math.floor((this.totalMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		},
		minutes() {
			return Math.floor((this.totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
		},
		seconds() {
			return Math.floor((this.totalMilliseconds % (1000 * 60)) / 1000);
		},
	},
	watch: {
		totalMilliseconds: {
			handler(value) {
				if (value >= 0) {
					setTimeout(() => {
						this.totalMilliseconds -= 1000;
					}, 1000);
				}
			},
			immediate: true,
		},
	},
};
</script>

<style scoped>
#countdown {
	@apply m-0 text-center;
	font-size: 0.85em;
	line-height: 1;
}
</style>
