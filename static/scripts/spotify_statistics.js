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

fetch("/spotify_statistics/top_artists")
        .then((response) => response.json())
        .then((data) => {
            display(data.items)
        })

function display(data) {
    let informationSection = document.querySelector("div#information");

    for (let item of data) {
        let artistCard = document.createElement("div")
        artistCard.className = "artist-card"

        let artistImage = document.createElement("img");
        artistImage.src = item.images[0].url;
        artistCard.appendChild(artistImage);

        artistCard.innerHTML += item.name;

        informationSection.appendChild(artistCard);
    }
}

