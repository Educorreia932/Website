import {Buffer} from 'buffer'

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();

    const clientID = config.spotifyClientId;
    const clientSecret = config.spotifyClientSecret;
    const refreshToken = config.spotifyRt;

    const basic = Buffer.from(`${clientID}:${clientSecret}`).toString("base64");

    async function getAccessToken() {
        const response = await fetch(TOKEN_ENDPOINT, {
            method: "POST",
            headers: {
                Authorization: `Basic ${basic}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: refreshToken,
            }).toString(),
        });

        return response.json();
    }

    async function getNowPlaying() {
        const accessToken = (await getAccessToken()).access_token;

        return fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    }

    return {
        provide: {
            getNowPlaying: getNowPlaying
        }
    }
})
