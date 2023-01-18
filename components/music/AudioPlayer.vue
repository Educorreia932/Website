<template>
	<audio :src="track.preview_url" autoplay loop ref="audioPlayer" :muted="!playing"></audio>
</template>

<script setup lang="ts">
import {Track} from "~/types/Track";

let {track} = defineProps<{
	track: Track,
	playing: boolean,
}>();

const audioPlayer = ref();

onMounted(() => {
	audioPlayer.value.volume = 0.3;
})
</script>
