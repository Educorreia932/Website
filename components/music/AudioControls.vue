<template>
	<div id="audio-control">
		<button @click="onBackward">
			<FontAwesomeIcon :icon="['fa-solid', 'backward-step']"/>
		</button>

		<button class="scale-125" @click="onPlayPause">
			<FontAwesomeIcon :icon="['fa-solid', playing? 'pause' : 'play']" class="pause"/>
		</button>

		<button @click="onForward">
			<FontAwesomeIcon :icon="['fa-solid', 'forward-step']"/>
		</button>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	playing: boolean,
	onBackward: () => void,
	onPlayPause: () => void,
	onForward: () => void,
}>()
</script>

<style scoped>
#audio-control {
	@apply flex flex-row space-x-3 items-center;

	> * > * {
		@apply bg-white-dark dark:bg-gray w-4 h-4 p-2 rounded-full opacity-75 hover:opacity-100;
	}

	> .pause {
		@apply w-6 h-6;
	}
}
</style>