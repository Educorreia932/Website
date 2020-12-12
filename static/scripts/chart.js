var current_page = 0;
var genres = [];

// Generates a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++)
        color += letters[Math.floor(Math.random() * 16)];

    return color;
}

function createChart(data) {
    let genres = []
    let colors = []

    data.items.forEach(artist => {
        artist.genres.forEach(genre => {
            genres.push(genre);
        })
    });

    // Counting the occurences of each genre
    var setCount = (list, i) => {
            (i in list) ? list[i]++: (list[i] = 1);
            return list;
        },
        ini = {},
        occurences = arr => arr.reduce(setCount, ini) // our count of occurences helper

    genres = occurences(genres);

    Object.keys(genres).forEach(genre => {
        colors.push(getRandomColor());
    });

    var sortable = [];
    var labels = [];
    var data = [];

    for (let genre in genres) {
        sortable.push([genre, genres[genre]]);
    }

    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });

    sortable.forEach(element => {
        labels.push(element[0]);
        data.push(element[1]);
    })

    displayData(labels, data);

    var ctx = document.getElementById('chart');

    var myPieChart = new Chart(ctx, {
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

function displayData(labels, data) {
    genres = labels;
    fillGenresList(0, labels);
}

function displayPlaylists(data) {
    fillList("playlists-list", data.items);
}

function fillGenresList(page, labels) {
    $('ol').empty();

    let offset = page * 25;

    let list = document.getElementById("data");

    for (let i = labels.length - 1 - offset; i > labels.length - 26 - offset; i--) {
        let entry = document.createElement("li");
        entry.appendChild(document.createTextNode(labels[i]));
        list.appendChild(entry);
    }
}

function fillList(id, data) {
    let list = document.getElementById(id);

    for (let i = 0; i < data.length; i++) {
        let entry = document.createElement("li");
        let a = document.createElement("a");
        a.innerHTML = data[i].name;
        a.href = data[i].external_urls.spotify;
        entry.appendChild(a);
        list.appendChild(entry);
    }
}

function changeGenresPage(direction_offset) {
    current_page += direction_offset;

    if (current_page < 0) 
        current_page= 0

    else
        fillGenresList(current_page, genres);
}