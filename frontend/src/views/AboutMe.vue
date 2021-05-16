<template>
	<h1>Get to know me better</h1>

	<!-- Visited countries -->
	<h3>Visited countries 🌍</h3>

	<globe width=400 height=400 speed=0.005></globe>

	<!-- Favorite videogames -->
	<h3>Favorite videogames 🎮</h3>

	<ul>
		<li>The Elder Scrolls V: Skyrim</li>
		<li>The Witcher III: Wild Hunt</li>
		<li>Dark Souls III</li>
		<li>The Legend of Zelda: Breath of the Wild</li>
		<li>Divinity: Original Sin II</li>
		<li>Little Big Planet 2</li>
		<li>Pokémon Heartgold</li>
		<li>Starbound</li>
		<li>Terraria</li>
		<li>The Binding of Isaac: Rebirth</li>
	</ul>

	<!-- Favorite anime -->
	<h3>Favorite anime 🐱‍🏍</h3>

	<ul>
		<li>Code Geass</li>
		<li>Fullmetal Alchemist: Brotherhood</li>
		<li>Death Note</li>
		<li>Howl's Moving Castle</li>
		<li>Evangelion</li>
	</ul>

	<h3>Favorite music albums 🎸</h3>
	<img alt="Favorite music albums" src="/static/images/FavoriteMusicAlbums.png" width="550">

	<h3>Favorite movies/series 📺</h3>

	<ul>
		<li>Breaking Bad</li>
		<li>IT Crowd</li>
		<li>The Big Bang Theory</li>
		<li>Star Wars Saga</li>
		<li>Marvel Cinematic Universe</li>
		<li>Studio Ghibli Movies</li>
	</ul>

	<h3>Favorite Youtube channels 📹</h3>

	<ul>
		<li><a href="https%3A/www.youtube.com/user/numberphile">Numberphile</a></li>
		<li><a href="https%3A/www.youtube.com/user/enyay">Tom Scott</a></li>
		<li><a href="https%3A/www.youtube.com/user/SsethTzeentach">SsethTzeentach</a></li>
		<li><a href="https%3A/www.youtube.com/user/PaolofromTOKYO">Paolo fromTOKYO</a></li>
		<li><a href="https%3A/www.youtube.com/user/UniversoProgramado">Universo Programado</a></li>
	</ul>

</template>

<script>
import Globe from "@/components/Globe";

export default {
	name: "AboutMe",
	components: {Globe}
}
</script>

<style scoped>
h3 {
	@apply text-center;
}

ul {
	text-align: center;
	list-style: inside none;
}
</style>