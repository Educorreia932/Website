<template>
	<button @click="scroll">Right</button>
	<div id="scroller">
		<span v-for="(album, i) in albums" :key="i" :class="`item ${getPosition(i)}`">
			<img width="300" :src="`/images/albums/${album.image}`" alt="Album cover">
		</span>
	</div>
</template>

<script setup lang="ts">
import music from "~/assets/json/music.json";

const albums = music.albums;

let currentPosition = ref(0);

const scroll = () => {
	currentPosition.value = mod(currentPosition.value + 1, albums.length);
};

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
#scroller {
	@apply mx-auto;

	width: 300px;
	height: 300px;
	padding: 50px 0;
	perspective: 500px;
}

.item {
	width: 300px;
	position: absolute;
	transition: all 0.4s ease-in-out;

	img {
		@apply block mx-auto rounded-lg;
	}
}

.hide {
	opacity: 0;
}

.left {
	transform: rotateY(25deg) translateX(-320px) skewY(-5deg) scale(0.4, 0.6);

	&.hide {
		transform: rotateY(25deg) translateX(-430px) skewY(-5deg) scale(0.3, 0.5);
	}
}

.middle {
	transform: rotateY(0deg) translateX(0) scale(1);
}

.right {
	transform: rotateY(-25deg) translateX(320px) skewY(5deg) scale(0.4, 0.6);

	&.hide {
		transform: rotateY(-25deg) translateX(430px) skewY(5deg) scale(0.3, 0.5);
	}
}
</style>