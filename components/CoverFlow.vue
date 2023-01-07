<template>
	<button @click="scroll">Right</button>
	<div id="scroller">
		<span v-for="(item, i) in items" :key="i" :class="`item ${getPosition(i)}`">
			<img width="300" :src="item" alt="Album cover">
		</span>
	</div>
</template>

<script setup lang="ts">
let currentPosition = ref(0);

const items = [
	"https://upload.wikimedia.org/wikipedia/en/6/63/Tool_-_Lateralus.jpg",
	"https://upload.wikimedia.org/wikipedia/en/1/1d/Primal_Scream_-_Screamadelica.png",
	"https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg?20210720151219",
];

const scroll = () => {
	currentPosition.value++;
};

const getPosition = (i: number) => {
	if (i == currentPosition.value)
		return "middle";

	else if (i == mod(currentPosition.value - 1, 3))
		return "left";

	else if (i == mod(currentPosition.value + 1, 3))
		return "right";

	else
		return "hidden";
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
	display: block;
	position: absolute;
	transition: all 0.4s ease-in-out;

	img {
		@apply block mx-auto;
	}
}

.left {
	transform: rotateY(25deg) translateX(-320px) skewY(-5deg) scale(0.4, 0.6);
}

.right {
	transform: rotateY(-25deg) translateX(320px) skewY(5deg) scale(0.4, 0.6);
}
</style>