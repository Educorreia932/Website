const request = require('request');
const express = require('express');
const queryString = require('query-string');

const app = express()

const SCOPE = "user-read-playback-state user-top-read";

app.get('/login', (req, res) => {
    // Redirect to Spotify login page
    res.writeHead(302, {
        "Location": encodeURI("https://accounts.spotify.com/authorize" +
            `?client_id=${process.env.SPOTIFY_CLIENT_ID}` +
            "&response_type=code" +
            `&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}` +
            `&scope=${SCOPE}` +
            "&show_dialog=true"
        )
    })

    res.send()
})

app.get("/callback", (req, res) => {
    // After successful login make API call to get profile's data
    const token = new Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString("base64")

    const authOptions = {
        url: "https://accounts.spotify.com/api/token",
        form: {
            code: req.query.code || null,
            redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
            grant_type: "authorization_code"
        },
        headers: {
            "Authorization": `Basic ${token}`
        },
        json: true
    }

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            const access_token = body.access_token;
            const refresh_token = body.refresh_token;

            res.redirect("http://localhost:3000/spotify_statistics?" +
                queryString.stringify({
                    access_token: access_token,
                    refresh_token: refresh_token
                })
            )
        }
    })
})

module.exports = app
