fetch("/spotify_statistics/is_authenticated")
    .then((response) => response.json())
    .then((data) => {
        let isSpotifyAuthenticated = data.status;

        if (!isSpotifyAuthenticated) {
            fetch("/spotify_statistics/get_auth_url")
                .then((response) => response.json())
                .then((data) => {
                    window.location.replace(data.url);
                });
        }
    });

function fetchTopArtists(timePeriod = "medium_term") {
    fetch(`/spotify_statistics/top_artists?time_range=${timePeriod}`)
        .then((response) => response.json())
        .then((data) => {
            display(data.items);
        })
}

function display(data) {
    let genres = favoriteGenres(data);

    let genreEntries = Object.entries(genres).sort(function (a, b) {
        return a[1] - b[1];
    });

    genres = Object.fromEntries(genreEntries);

    generateChart(genres);
    generateWordCloud(genres);
}

function favoriteGenres(data) {
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
}

function generateChart(genres) {
    document.getElementById('chart').innerHTML = "<canvas id=\"doughnut\" width=\"400\" height=\"400\"></canvas>";

    const ctx = document.getElementById('doughnut');

    let labels = Object.keys(genres);
    let data = Object.values(genres);
    let colors = labels.map(() => getRandomColor());

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
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++)
        color += letters[Math.floor(Math.random() * 16)];

    return color;
}

function generateWordCloud(genres) {
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

let timePeriodRadioButtons = document.querySelectorAll("section#time-period-selection input")

for (let radioButton of timePeriodRadioButtons) {
    radioButton.addEventListener("click", function () {
        fetchTopArtists(radioButton.value);
    })
}

fetchTopArtists();
