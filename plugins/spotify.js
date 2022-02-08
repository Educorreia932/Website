const clientID = process.env.spotifyClientID;
const clientSecret = process.env.spotifyClientSecret;
const refreshToken = process.env.spotifyRefreshToken;

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";

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

export async function getNowPlaying() {
	const accessToken = (await getAccessToken()).access_token;

	return fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
}

