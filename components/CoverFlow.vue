<template>
	<div>
		<div id="scroller" ref="scroller">
			<span
				v-for="(item, i) in albums"
				:key="i" :class="`item ${getPosition(i)} ${shake? 'shake' : ''}`"
				@click="i === currentPosition? togglePlaying() : scroll(i)"
			>
				<img :src="item.image_url" alt="Album cover"/>
			</span>
		</div>

		<p class="text-center select-none">
			<span class="text-xl">
				<strong>{{ currentAlbum.artist }}</strong> |

				<a :href="currentAlbum.album_url" class="text-black dark:text-white">
					{{ currentAlbum.name }}
				</a>
			</span>

			<br>

			<span class="flex flex-row space-x-2 text-center items-center justify-center">
				<AudioBars v-if="playing"/>
				
				<FontAwesomeIcon :icon="['fa-solid', 'volume-xmark']" v-else/>
	
				<a :href="currentAlbum.tracks[currentTrack].track_url"
				   class="text-black dark:text-white">
					{{ currentAlbum.tracks[currentTrack].name }}
				</a>
			</span>
		</p>
	</div>

	<audio :src="previewTrack" autoplay loop ref="audioPlayer" :muted="!playing"></audio>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {SwipeDirection, useSwipe} from "@vueuse/core";
import music from "assets/json/music.json";

const albums = music.albums;

let currentPosition = ref(0);
let shake = ref(false);
let previewTrack = ref<string | null>(null);
let playing = ref(true);

const scroller = ref(null);
const audioPlayer = ref<HTMLAudioElement | null>(null);

const currentAlbum = computed(() => albums[currentPosition.value]);
const currentTrack = ref(0);

useSwipe(scroller, {
	threshold: 10,
	onSwipeEnd(e: TouchEvent, direction: SwipeDirection) {
		if (direction == SwipeDirection.LEFT)
			scroll(mod(currentPosition.value + 1, albums.length));

		else if (direction == SwipeDirection.RIGHT)
			scroll(mod(currentPosition.value - 1, albums.length));
	}
});

const scroll = (i: number) => {
	shake.value = false;
	currentTrack.value = 0;
	currentPosition.value = i;
};

const changeTrack = (offset: number) => {
	shake.value = true;

	setTimeout(() => shake.value = false, 1000);

	currentTrack.value = mod((currentTrack.value + offset), currentAlbum.value.tracks.length);
};

const togglePlaying = () => {
	playing.value = !playing.value;
};

watchEffect(() => {
	const track = currentAlbum.value.tracks[currentTrack.value];

	previewTrack.value = track.preview_url;
});

onMounted(() => {
	if (audioPlayer.value != null)
		audioPlayer.value.volume = 0.3;

	window.addEventListener("keydown", (event) => {
		if (event.code == "ArrowDown") {
			event.preventDefault();
			changeTrack(1);
		} 
		
		else if (event.code == "ArrowUp") {
			event.preventDefault();
			changeTrack(-1);
		} 
		
		else if (event.code == "ArrowLeft") {
			event.preventDefault();
			scroll(mod(currentPosition.value - 1, albums.length));
		}

		else if (event.code == "ArrowRight") {
			event.preventDefault();
			scroll(mod(currentPosition.value + 1, albums.length));
		}

		else if (event.code == "Space") {
			event.preventDefault();
			togglePlaying();
		}
	});
});

const getPosition = (i: number) => {
	let classes = [];

	if (
		i != mod(currentPosition.value - 1, albums.length) &&
		i != mod(currentPosition.value + 1, albums.length) &&
		i != currentPosition.value
	)
		classes.push("hide");

	if (i == currentPosition.value)
		classes.push("middle");

	else if (mod(i - currentPosition.value, albums.length) <= albums.length / 2)
		classes.push("right");

	else
		classes.push("left");

	return classes.join(" ");
};
</script>

<style scoped lang="scss">
@keyframes tilt-shaking {
	$angle: 10deg;

	0% {
		transform: translateX(0)
	}
	25% {
		transform: translateY(-9px)
	}
	35% {
		transform: translateY(-9px) rotate($angle)
	}
	55% {
		transform: translateY(-9px) rotate(-$angle)
	}
	65% {
		transform: translateY(-9px) rotate($angle)
	}
	75% {
		transform: translateY(-9px) rotate(-$angle)
	}
	100% {
		transform: translateY(0) rotate(0)
	}
}

@mixin sizer($size) {
	width: $size;
	height: $size;
}

@mixin side-item($offset, $direction) {
	$y-rotation: rotateY(calc($direction * -25deg));
	$y-skew: skewY(calc($direction * 5deg));

	transform: $y-rotation translateX(calc($direction * $offset)) $y-skew scale(0.4, 0.6);

	&.hide {
		transform: $y-rotation translateX(calc($direction * (#{$offset} + 5vw))) $y-skew scale(0.3, 0.5);
	}
}

@mixin left($offset) {
	@include side-item($offset, -1);
}

@mixin right($offset) {
	@include side-item($offset, 1);
}

.hide {
	@apply opacity-0 pointer-events-none;
}

.middle {
	transform: rotateY(0deg) translateX(0) scale(1);

	&.shake {
		animation: tilt-shaking 1s;
	}
}

#scroller, .item img {
	@media screen and (min-width: 0px) {
		@include sizer(45vw);
	}

	@media screen and (min-width: 640px) {
		@include sizer(30vw);
	}

	@media screen and (min-width: 1300px) {
		@include sizer(25vw);
	}
}

#scroller {
	@apply mx-auto;

	perspective: 500px;
}

.item {
	@apply cursor-pointer absolute;
	-webkit-tap-highlight-color: transparent;

	transition: all 0.4s ease-in-out;

	img {
		@apply block mx-auto rounded-lg pointer-events-none select-none;
	}
}

.left {
	@media screen and (min-width: 0px) {
		@include left(35vw);
	}

	@media screen and (min-width: 640px) {
		@include left(23vw);
	}

	@media screen and (min-width: 1300px) {
		@include left(20vw);
	}
}

.right {
	@media screen and (min-width: 0px) {
		@include right(35vw);
	}

	@media screen and (min-width: 640px) {
		@include right(23vw);
	}

	@media screen and (min-width: 1300px) {
		@include right(20vw);
	}
}
</style>