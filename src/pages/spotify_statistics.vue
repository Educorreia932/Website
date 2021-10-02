<template>
	<div id="page">
		<main>
			<h1>Spotify Statistics</h1>

			<h2>Your favorite genres</h2>

			<div id="time-period-selection">
				<input type="radio" id="4-weeks-period" name="time-period" v-on:click="setTimeRange('short_term')">
				<label for="4-weeks-period">Last 4 weeks</label>

				<input type="radio" id="6-months-period" name="time-period"
					   v-on:click="setTimeRange('medium_term')" checked>
				<label for="6-months-period">Last 6 months</label>

				<input type="radio" id="all-time-period" name="time-period" v-on:click="setTimeRange('long_term')">
				<label for="all-time-period">All time</label>
			</div>

			<div v-if="!this.loading" id="content">
				<genres-doughnut id="doughnut" :chart-data="this.chartDataset"/>
				<genres-wordcloud id="wordcloud" :topGenres="this.topGenres[this.selectedTimeRange]" />
			</div>
		</main>

		<footer>
			&copy; 2021 - Eduardo Correia
		</footer>
	</div>
</template>

<script>
import axios from "axios";

import GenresDoughnut from "@/components/GenresDoughnut";
import GenresWordcloud from "@/components/GenresWordcloud";

export default {
	name: "SpotifyStatistics",
	layout: "empty",
	head: {
		title: 'Spotify Statistics | Eduardo Correia',
		meta: [
			{name: "twitter:title", content: "Spotify Statistics | Eduardo Correia"},
			{property: "og:title", content: "Spotify Statistics | Eduardo Correia"},
		],
		link: [
			{rel: "stylesheet", href: "https://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"}
		]
	},
	methods: {
		setTimeRange(timeRange) {
			this.selectedTimeRange = timeRange;
		},
		generateRandomColor() {
			const letters = '0123456789ABCDEF';
			let color = '#';

			for (let i = 0; i < 6; i++)
				color += letters[Math.floor(Math.random() * 16)];

			return color;
		}
	},
	components: {
		"genres-doughnut": GenresDoughnut,
		"genres-wordcloud": GenresWordcloud
	},
	data() {
		return {
			topArtists: {},
			selectedTimeRange: "medium_term"
		}
	},
	computed: {
		loading() {
			return this.$store.state.spotify_statistics.loading;
		},
		topGenres() {
			let genres = {
				"short_term": {},
				"medium_term": {},
				"long_term": {}
			};

			const topArtists = this.$store.state.spotify_statistics.topArtists

			if (!this.$store.state.spotify_statistics.loading) {
				for (const timeRange of Object.keys(topArtists))
					for (const items of topArtists[timeRange].items) {
						for (let genre of items["genres"]) {
							if (genres[timeRange][genre] === undefined)
								genres[timeRange][genre] = 1;

							else
								genres[timeRange][genre] += 1;
						}

						// Sort genres by number of occurrencies
						let genreEntries = Object.entries(genres[timeRange]).sort(function (a, b) {
							return a[1] - b[1];
						});

						genres[timeRange] = Object.fromEntries(genreEntries);
					}
			}

			else
				genres = null;

			return genres
		},
		chartDataset() {
			return {
				labels: Object.keys(this.topGenres[this.selectedTimeRange]),
				datasets: [{
					backgroundColor: Object.keys(this.topGenres[this.selectedTimeRange]).map(this.generateRandomColor),
					data: Object.values(this.topGenres[this.selectedTimeRange])
				}]
			}
		},
	},
	beforeCreate() {
		const responses = {
			"short_term": null,
			"medium_term": null,
			"long_term": null
		};

		if (this.$route.query.access_token) {
			let timeRanges = Object.keys(responses);

			for (const timeRange of timeRanges) {
				// Retrieve top artists data
				responses[timeRange] = axios.get(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=50`, {
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${this.$route.query.access_token}`
					}
				})
			}

			axios.all(Object.values(responses))
				.then(
					axios.spread((...responses) => {
						for (let i = 0; i < responses.length; i++) {
							this.$store.commit("spotify_statistics/mutateTopArtists", {
								timeRange: timeRanges[i],
								payload: responses[i].data
							})
						}

						this.$store.commit("spotify_statistics/mutateLoading", false)
					})
				)
		}

	},
	middleware({route, store, redirect}) {
		// Redirect to Spotify login page
		if (!route.query.access_token && store.state.spotify_statistics.loading)
			redirect("/spotify_statistics/login");
	}
}
</script>

<style scoped lang="scss">
#page {
	@apply mx-48;
}

#time-period-selection {
	@apply flex text-center mt-8 p-0 justify-center list-none;

	label {
		@apply text-black p-2;
		width: 12em;
		background-color: #F6F6F6;
	}

	input:checked + label {
		@apply text-white;
		background-color: #1DB954;
	}

	label:first-of-type {
		border-radius: 25px 0 0 25px;
	}

	label:last-of-type {
		border-radius: 0 25px 25px 0;
	}

	input {
		@apply hidden;
	}
}

#content {
	@apply grid my-9 bg-white;
	grid-template-columns: 60% 1fr;

	#doughnut {
		@apply px-10;
	}
}

footer {
	@apply text-center;
}
</style>
