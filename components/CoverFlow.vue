<template>
	<div id="scroller" @keyup.space="advanceTrack">
		<span
			v-for="(item, i) in albums"
			:key="i" :class="`item ${getPosition(i)} ${shake? 'shake' : ''}`"
			@click="i === currentPosition? advanceTrack() : scroll(i)"
		>
			<nuxt-img width="300" :src="item.album.images[1].url" alt="Album cover"/>
		</span>
	</div>

	<p class="text-center">
		<strong>{{ currentAlbum.album.artists[0].name }}</strong> |

		<a :href="currentAlbum.album.external_urls.spotify" class="text-black dark:text-white">
			{{ currentAlbum.album.name }}
		</a>

		<br>

		<span class="flex flex-row space-x-2 text-center items-center justify-center">
			<AudioBars/>

			<a :href="currentAlbum.album.tracks.items[currentTrack].external_urls.spotify"
			   class="text-black dark:text-white">
				{{ currentAlbum.album.tracks.items[currentTrack].name }}
			</a>
		</span>
	</p>

	<audio :src="previewTrack" autoplay loop ref="audioPlayer"></audio>
</template>

<script setup lang="ts">
import music from "assets/json/music.json";

const albums = music.albums;

let currentPosition = ref(0);
let shake = ref(false);
let previewTrack = ref<string>("");
const audioPlayer = ref<HTMLAudioElement | null>(null);
const currentAlbum = computed(() => albums[currentPosition.value]);
const currentTrack = ref(0);

const scroll = (i: number) => {
	shake.value = false;
	currentTrack.value = 0;
	currentPosition.value = i;
};

const advanceTrack = () => {
	shake.value = true;

	setTimeout(() => shake.value = false, 1000);

	currentTrack.value = (currentTrack.value + 1) % currentAlbum.value.album.tracks.items.length;
};

watchEffect(() => {
	const track = currentAlbum.value.album.tracks.items[currentTrack.value];

	previewTrack.value = track.preview_url;
});

onMounted(() => {
	if (audioPlayer.value != null)
		audioPlayer.value.volume = 0.2;

	window.addEventListener('keyup', (event) => {
		if (event.code == "Space")
			advanceTrack();

		else if (event.code == "ArrowLeft")
			scroll(mod(currentPosition.value - 1, albums.length));

		else if (event.code == "ArrowRight")
			scroll(mod(currentPosition.value + 1, albums.length));
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
	0% {
		transform: translateX(0)
	}
	25% {
		transform: translateY(-9px)
	}
	35% {
		transform: translateY(-9px) rotate(17deg)
	}
	55% {
		transform: translateY(-9px) rotate(-17deg)
	}
	65% {
		transform: translateY(-9px) rotate(17deg)
	}
	75% {
		transform: translateY(-9px) rotate(-17deg)
	}
	100% {
		transform: translateY(0) rotate(0)
	}
}

#scroller {
	@apply mx-auto;

	width: 300px;
	height: 300px;
	perspective: 500px;
}

.item {
	@apply cursor-pointer;

	width: 300px;
	position: absolute;
	transition: all 0.4s ease-in-out;

	img {
		@apply block mx-auto rounded-lg pointer-events-none select-none;
	}
}

.hide {
	@apply opacity-0 pointer-events-none;
}

.left {
	transform: rotateY(25deg) translateX(-320px) skewY(-5deg) scale(0.4, 0.6);

	&.hide {
		transform: rotateY(25deg) translateX(-430px) skewY(-5deg) scale(0.3, 0.5);
	}
}

.middle {
	transform: rotateY(0deg) translateX(0) scale(1);

	&.shake {
		animation: tilt-shaking 1s;
	}
}

.right {
	transform: rotateY(-25deg) translateX(320px) skewY(5deg) scale(0.4, 0.6);

	&.hide {
		transform: rotateY(-25deg) translateX(430px) skewY(5deg) scale(0.3, 0.5);
	}
}
</style>