<template>
	<section>
		<h1>Welcome to my webpage</h1>

		<p>
			My name is Eduardo, I'm
			<del>not</del>
			your typical portuguese nerd and this is
			<del>not</del>
			your typical webpage.
		</p>

		<p>I don't know how you ended up here and, since you might not know me, here's a brief heads up.</p>

		<p>I'm currently attending the third year of a "Master in Informatics and Computing Engineering" 5-year
			course
			in <a href="https://sigarra.up.pt/feup/pt/web_page.inicial" target="_blank">FEUP</a> (Faculty of
			Engineering
			of University of Porto).</p>

		<p>My main hobbies are to watch <i>Youtube</i>/anime, browse <i>reddit</i>, play video-games, tabletop games
			or
			role-playing games (mainly <i>Dungeons & Dragons</i>), code (most of the time in <b>C/C++</b>, <b>C#</b>
			(Unity) <b>Python</b>, <b>Java</b> or
			<del>the Holy Trinity</del>
			<b>HTML</b>/<b>CSS</b>/<b>Javascript</b>), listen to music and occasionally draw, do some image editing
			or
			read a book.
		</p>

		<p>
			Online, I usually go by the nickname <b>Educorreia932</b> or <b>Skelozard</b>.<br>
			I'm guessing it's fairly obvious to see where the first nickname comes from (the <b>932</b> part was
			just
			because there were already 931 "Eduardo's" in a game I created an account many years ago and it sticked
			since).<br>
			About the second one, it's a contraction between <b>Skeleton</b> and <b>Lizard</b> (my favorite animal)
			/
			<b>Wizard</b> (my favorite RPG class), but also the name of a <a
			href="https://pokegods-or-fakemon.fandom.com/wiki/Skelozard" target="_blank">fake pokémon</a>
			apparently.<br>
			I sometimes use <b>Skelozard1</b> in platforms where an account named <b>Skelozard</b> already exists
			<del>curse you Skelozardε</del>
			.
		</p>
	</section>

	<!-- Avatar-->
	<img id="avatar" alt="Avatar" src="@/assets/images/Avatar.png" width="400" height="400" class="block mx-auto">

	<section class="text-center my-10">
		<p>Time to end university course ⏲</p>

		<progress-bar :width=width></progress-bar>
		<countdown :end_date=end_date></countdown>
	</section>

	<section id="social-media" class="flex space-x-3 place-content-center">
		<a href="https://github.com/Educorreia932" target="_blank">
			<font-awesome-icon :icon="['fab', 'github']" size="2x"/>
		</a>
		<a href="https://steamcommunity.com/id/Skelozard" target="_blank">
			<font-awesome-icon :icon="['fab', 'steam']" size="2x"/>
		</a>
		<a href="https://open.spotify.com/user/skelozard" target="_blank">
			<font-awesome-icon :icon="['fab', 'spotify']" size="2x"/>
		</a>
		<a href="https://www.linkedin.com/in/eduardo-correia-7a608216a" target="_blank">
			<font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/>
		</a>
		<a href="https://www.instagram.com/educorreia932" target="_blank">
			<font-awesome-icon :icon="['fab', 'instagram']" size="2x"/>
		</a>
		<a href="https://discord.bio/p/skelozard" target="_blank">
			<font-awesome-icon :icon="['fab', 'discord']" size="2x"/>
		</a>
		<a href="mailto:educorreia932@gmail.com" target="_blank">
			<font-awesome-icon :icon="['fas', 'envelope']" size="2x"/>
		</a>
	</section>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue"
import Countdown from "@/components/Countdown"

const start_date = new Date(2018, 9, 8);
const end_date = new Date(2023, 6, 21);
const today = new Date();

export default {
	name: 'Home',
	components: {
		"progress-bar": ProgressBar,
		"countdown": Countdown
	},
	data() {
		return {
			width: this.calculatePercentage(),
			start_date: start_date,
			end_date: end_date,
			today: today
		}
	},
	methods: {
		daysBetween(date1, date2) {
			// The number of milliseconds in one day
			const ONE_DAY = 1000 * 60 * 60 * 24;

			// Convert both dates to milliseconds
			const date1_ms = date1.getTime();
			const date2_ms = date2.getTime();

			// Calculate the difference in milliseconds
			const difference_ms = Math.abs(date1_ms - date2_ms);

			// Convert back to days and return
			return Math.round(difference_ms / ONE_DAY);
		},
		calculatePercentage() {
			const time1 = this.daysBetween(start_date, end_date);
			const time2 = this.daysBetween(start_date, today);

			return ((time2 / time1) * 100).toFixed(4);
		}
	},
}
</script>

<style>
#social-media a {
	@apply text-white hover:text-2xl transition-all;
}
</style>

