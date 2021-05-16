<template>
	<h1>Get to know me better</h1>

	<!-- Visited countries -->
	<h3>Visited countries 🌍</h3>

	<section id="countries">
		<div class="flags">
			<country-flag country='pt' size='big' class="flag"/>
			<country-flag country='es' size='big' class="flag"/>
			<country-flag country='fr' size='big' class="flag"/>
			<country-flag country='gb' size='big' class="flag"/>
			<country-flag country='it' size='big' class="flag"/>
			<country-flag country='de' size='big' class="flag"/>
		</div>

		<globe width=400 height=400 speed=0.005 id="globe"></globe>

		<div class="flags">
			<country-flag country='be' size='big' class="flag"/>
			<country-flag country='pl' size='big' class="flag"/>
			<country-flag country='ch' size='big' class="flag"/>
			<country-flag country='cz' size='big' class="flag"/>
			<country-flag country='ie' size='big' class="flag"/>
		</div>
	</section>

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

	<img alt="Favorite music albums" src="@/assets/images/FavoriteMusicAlbums.png" width="550">

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
import CountryFlag from 'vue-country-flag-next'

export default {
	name: "AboutMe",
	components: {
		"globe": Globe,
		"country-flag": CountryFlag
	}
}
</script>

<style scoped>
h3 {
	@apply text-center;
}

img {
	@apply block mx-auto;
}

ul {
	text-align: center;
	list-style: inside none;
}

.flag {
	border-radius: 8px 8px;
}

#countries {
	@apply flex flex-row space-x-16 place-content-center;
	height: 400px;
}

.flags {
	@apply flex flex-col space-y-5 place-content-center;
}
</style>