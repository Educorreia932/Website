<template>
	<div class="flex-1 flex flex-col items-center justify-center pt-10">
		<section id="biography" class="flex-1"
				 :style="[this.isMyBirthday() ? {'margin-bottom': '5em'} : {'margin-bottom': '0'}]">
			<h1>
				<nuxt-link to="/" class="no-underline">Eduardo Correia</nuxt-link>
			</h1>

			<div class="text-center flex-1">
				<q class="italic inline mx-auto pl-2">Programming is like alchemy and I turn 0s and 1s into things in
					the
					internet</q>
				⚗️
			</div>

			<p>
				Currently attending a <em>Master in Informatics and Computing Engineering</em> 5-year course in
				<a href="https://sigarra.up.pt/feup/pt/web_page.inicial" target="_blank">FEUP</a>.
			</p>

			<p>
				Interested in
				<nuxt-link to="projects">building things</nuxt-link>
				📝,
				<nuxt-link to="travel">travelling</nuxt-link>
				🌍,
				<nuxt-link to="music">music</nuxt-link>
				🎹,
				<nuxt-link to="gaming">gaming</nuxt-link>
				🎮 and
				<nuxt-link to="anime">anime & manga</nuxt-link>
				📺.
			</p>

			<p>Online, I usually go by the username <b>Educorreia932</b> or <b>Skelozard</b>.</p>
		</section>

		<div id="avatar">
			<img id="birthday-hat" v-if="this.isMyBirthday()" src="@/assets/images/BirthdayHat.png" alt="Birthday Hat">
			<img id="avatar-image" src="@/assets/images/Avatar.png" class="py-4 max-w-full" alt="Avatar"/>
		</div>

		<section class="text-center w-full h-full flex-1 self-stretch py-auto">
			<p>Time to end university course ⏲</p>

			<progress-bar :width="width" class="xs:w-full sm:w-full md:w-9/12"></progress-bar>
			<countdown :end_date="end_date"></countdown>
		</section>

		<!-- Social Media -->
		<portal to="footer">
			<section id="social-media" class="flex space-x-3 place-content-center pb-5">
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
		</portal>
	</div>
</template>

<script>
import FavoriteThings from "@/components/FavoriteThings";
import ProgressBar from "@/components/ProgressBar";
import Countdown from "@/components/Countdown";

const start_date = new Date(2018, 9, 8);
const end_date = new Date(2023, 6, 21);
const today = new Date();

export default {
	name: "AboutMe",
	head: {
		title: 'About Me | Eduardo Correia',
		meta: [
			{name: "twitter:title", content: "About Me | Eduardo Correia"},
			{property: "og:title", content: "About Me | Eduardo Correia"},
		],
	},
	components: {
		"favorite-things": FavoriteThings,
		"progress-bar": ProgressBar,
		"countdown": Countdown,
	},
	data() {
		return {
			width: this.calculatePercentage(),
			start_date: start_date,
			end_date: end_date,
			today: today,
		};
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
		},
		isMyBirthday() {
			return today.getDate() === 10 && today.getMonth() + 1 === 10;
		}
	}
};
</script>

<style scoped>
h3 {
	@apply text-center;
}

#social-media a {
	@apply hover:text-2xl transition-all;
}

q {
	color: #aaa;
	border-left: 3px solid whitesmoke;
}

#birthday-hat {
	@apply absolute w-1/2 -top-1/4;
	left: 10%;
}

#avatar {
	@apply w-full md:w-96;
	position: relative;
}
</style>