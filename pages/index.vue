<template>
	<div>
		<portal to="h1">
			<ruby>
				Home
				<rt>家</rt>
			</ruby>
		</portal>

		<section class="flex flex-col pb-5">
			<h2>Programming is like alchemy and I turn 0s and 1s into things in the internet</h2>

			<div id="avatar">
				<img src="~/assets/images/avatar.png" alt="Avatar" />
			</div>

			<p class="mx-auto">
				Currently attending a Master's Degree in Informatics and Computing Engineering in
				<a href="https://sigarra.up.pt/feup/">FEUP</a>

				<br />

				Interested in
				<nuxt-link to="/projects">
					<ruby class="under"
					>building things
						<rt>事業</rt>
					</ruby>
				</nuxt-link><!--
				-->,
				<nuxt-link to="/travel">
					<ruby class="under"
					>travelling
						<rt>旅行</rt>
					</ruby>
				</nuxt-link><!--
				-->,
				<nuxt-link to="/music">
					<ruby class="under"
					>music
						<rt>音楽</rt>
					</ruby>
				</nuxt-link><!--
				-->,
				<nuxt-link to="/">
					<ruby class="under"
					>gaming
						<rt>ゲーム</rt>
					</ruby>
				</nuxt-link>
				and
				<nuxt-link to="/">
					<ruby class="under"
					>anime
						<rt>アニメ</rt>
					</ruby>
					&
					<ruby class="under"
					>manga
						<rt>漫画</rt>
					</ruby>
				</nuxt-link>

				<br />

				<!--				I also have a-->
				<!--				<nuxt-link to="/blog">-->
				<!--					<ruby class="under">blog-->
				<!--						<rt>網誌</rt>-->
				<!--					</ruby>-->
				<!--				</nuxt-link>-->
			</p>

			<div id="university-progress">
				<progress-bar :width="width" />
				<countdown :end_date="end_date" />
			</div>
		</section>
	</div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
import { Portal } from "portal-vue";

const start_date = new Date(2018, 9, 8);
const end_date = new Date(2023, 6, 21);
const today = new Date();

export default {
	head: {
		title: "Home | Eduardo Correia",
		meta: [
			{ name: "twitter:title", content: "Home | Eduardo Correia" },
			{ property: "og:title", content: "Home | Eduardo Correia" },
		],
	},
	components: {
		ProgressBar,
		Portal,
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
	},
};
</script>

<style scoped>
#avatar {
	@apply text-center mt-6;
}

#avatar img {
	height: 300px;
}

#university-progress {
	@apply flex flex-col h-full flex-1;
}

#progress-bar {
	@apply my-2 w-full md:w-7/12 mx-auto;
}
</style>
