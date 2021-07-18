<template>
	<div id="countdown">
		<p>{{ `${days}d ${hours}h ${minutes}m ${seconds}s` }}</p>
	</div>
</template>

<script>
export default {
	name: 'Countdown',
	props: ["end_date"],
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
		}
	},
	data() {
		return {
			totalMilliseconds: this.end_date.getTime() - new Date().getTime()
		}
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
		}
	}
}
</script>
