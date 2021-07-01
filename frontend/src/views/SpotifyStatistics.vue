<template>
    <main>
        <h1>Spotify Statistics</h1>

        <h2>Your favorite genres</h2>

        <section id="time-period-selection">
            <input type="radio" id="4-weeks-period" name="time-period" value="short_term">
            <label for="4-weeks-period">Last 4 weeks</label>

            <input type="radio" id="6-months-period" name="time-period" value="medium_term" checked>
            <label for="6-months-period">Last 6 months</label>

            <input type="radio" id="all-time-period" name="time-period" value="long_term">
            <label for="all-time-period">All time</label>
        </section>

        <section id="content">
            <!-- Chart -->
            <div id="chart">
                <canvas id="doughnut" width="400" height="400"></canvas>
            </div>

            <!-- Wordcloud -->
            <div id="wordcloud"></div>
        </section>
    </main>

    <footer>
        &copy; 2021 - Eduardo Correia
    </footer>
</template>

<script>
import * as d3 from "d3";
import Chart from "chart.js";

export default {
    name: "SpotifyStatistics",
    mounted() {
        fetch(process.env.VUE_APP_API_ENDPOINT + "/api/get_csrf_cookie")
            .then((response) => response.json())
            .then((data) => {
                this.setCookie("csrftoken", data.token)
            })

        // Check if user is authenticated
        fetch(process.env.VUE_APP_API_ENDPOINT + "/api/spotify_statistics/is_authenticated", {
            headers: {
                "Content-Type": "application/json",
                'X-CSRFToken': this.getCookie('csrftoken'),
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const isSpotifyAuthenticated = data.status;

                // Authenticate Spotify user, if they are not authenticated
                if (!isSpotifyAuthenticated) {
                    fetch(process.env.VUE_APP_API_ENDPOINT + "/api/spotify_statistics/get_auth_url")
                        .then((response) => response.json())
                        .then((data) => {
                            window.location.replace(data.url);
                        });
                }
            });

        this.fetchTopArtists();
    },
    methods: {
        setCookie(name, value) {
            document.cookie = name + "=" + (value || "") + "; path=/";
        },
        getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);

            if (parts.length === 2)
                return parts.pop().split(';').shift();
        },
        fetchTopArtists(timePeriod = "medium_term") {
            fetch(process.env.VUE_APP_API_ENDPOINT + `/api/spotify_statistics/top_artists?time_range=${timePeriod}`, {
                headers: {
                    "Content-Type": "application/json",
                    'X-CSRFToken': this.getCookie('csrftoken'),
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    this.display(data.items);
                })
        },
        display(data) {
            let genres = this.favoriteGenres(data);

            let genreEntries = Object.entries(genres).sort(function (a, b) {
                return a[1] - b[1];
            });

            genres = Object.fromEntries(genreEntries);

            this.generateChart(genres);
            this.generateWordCloud(genres);
        },
        favoriteGenres(data) {
            let genres = {};

            for (let item of data) {
                for (let genre of item.genres) {
                    if (genres[genre] === undefined)
                        genres[genre] = 1;

                    else
                        genres[genre] += 1;
                }
            }

            return genres;
        },
        generateChart(genres) {
            const ctx = document.getElementById('doughnut');

            let labels = Object.keys(genres);
            let data = Object.values(genres);
            let colors = labels.map(() => this.getRandomColor());

            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        label: "Genre",
                        backgroundColor: colors,
                        data: data
                    }]
                },
                options: {
                    legend: {
                        display: false
                    }
                }
            });
        },
        getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';

            for (let i = 0; i < 6; i++)
                color += letters[Math.floor(Math.random() * 16)];

            return color;
        },
        generateWordCloud(genres) {
            genres = Object.entries(genres);

            const margin = {
                top: 10,
                right: 10,
                bottom: 10,
                left: 10
            };

            const width = 450 - margin.left - margin.right;
            const height = 450 - margin.top - margin.bottom;

            document.getElementById("wordcloud").innerHTML = "";

            const svg = d3.select("#wordcloud").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

            const layout = d3.layout.cloud()
                .size([width, height])
                .words(genres.map(function (entry) {
                    return {
                        text: entry[0],
                        size: entry[1]
                    };
                }))
                .padding(5)
                .fontSize(function (d) {
                    return d.size * 12;
                })
                .on("end", draw);

            layout.start();

            function draw(genres) {
                svg
                    .append("g")
                    .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
                    .selectAll("text")
                    .data(genres)
                    .enter().append("text")
                    .style("font-size", function (d) {
                        return d.size + "px";
                    })
                    .attr("text-anchor", "middle")
                    .attr("transform", function (d) {
                        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                    })
                    .text(function (d) {
                        return d.text;
                    });
            }
        }
    },
}
</script>

<style scoped>
body {
    @apply p-4 bg-white;
}

section#time-period-selection {
    @apply flex text-center mt-8 p-0;
    list-style-type: none;
    justify-content: center;
}

section#time-period-selection label {
    width: 12em;
    color: black;
    background-color: #f6f6f6;
    padding: 0.3em;
}

section#time-period-selection input:checked + label {
    @apply text-white;
    background-color: #1DB954;
}

section#time-period-selection label:first-of-type {
    border-radius: 25px 0 0 25px;
}

section#time-period-selection label:last-of-type {
    border-radius: 0 25px 25px 0;
}

section#time-period-selection input {
    display: none;
}

section#content {
    @apply grid my-9;
    grid-template-columns: 60% 1fr;
}

section#content div#chart {
    padding-left: 15%;
    padding-right: 15%;
}

section#content div#wordcloud {
    @apply flex justify-center;
}

section#content div#wordcloud svg {
    @apply m-auto;
}

footer {
    @apply text-center;
}
</style>