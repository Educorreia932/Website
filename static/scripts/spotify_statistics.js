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
        })