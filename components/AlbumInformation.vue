<template>
	<div>
		<p class="text-center select-none mb-1">
			<span class="text-xl">
				<strong>{{ album.artist }}</strong> |

				<a :href="album.album_url" class="text-black dark:text-white">
					{{ album.name }}
				</a>
			</span>
		</p>

		<div class="flex flex-row space-x-2 text-center items-center justify-center text-sm">
			<div>
				<AudioBars v-if="playing"/>
				<FontAwesomeIcon :icon="['fa-solid', 'volume-xmark']" v-else/>
			</div>

			<a :href="currentTrack.track_url" class="text-black dark:text-white">
				{{ currentTrack.name }}
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
import {Album} from "~/types/Album";
import {Track} from "~/types/Track";

const {album, currentTrack} = defineProps<{
	album: Album,
	currentTrack: Track,
	playing: boolean
}>();
</script>

<style scoped>

</style>