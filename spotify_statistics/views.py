from django.shortcuts import redirect, render

from .credentials import *
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from requests import Request, post
from .utils import *


def spotify_statistics(request):
    if not request.session.exists(request.session.session_key):
        request.session.create()

    session_id = request.session.session_key

    context = {
        "token": get_user_tokens(session_id)
    }

    return render(request, "spotify_statistics.html", context=context)


class AuthURL(APIView):
    def get(self, request):
        scope = "user-read-playback-state user-top-read"

        url = Request("GET", "https://accounts.spotify.com/authorize", params={
            "scope": scope,
            "response_type": "code",
            "redirect_uri": REDIRECT_URI,
            "client_id": CLIENT_ID
        }).prepare().url

        return Response({"url": url}, status=status.HTTP_200_OK)


def spotify_callback(request):
    code = request.GET.get("code")
    error = request.GET.get("error")

    response = post("https://accounts.spotify.com/api/token", data={
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": REDIRECT_URI,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET
    }).json()

    access_token = response.get("access_token")
    token_type = response.get("token_type")
    refresh_token = response.get("refresh_token")
    expires_in = response.get("expires_in")

    error = response.get("error")

    if not request.session.exists(request.session.session_key):
        request.session.create()

    session_id = request.session.session_key

    update_or_create_user_tokens(session_id, access_token, token_type, expires_in, refresh_token)

    return redirect("/spotify_statistics")


class IsAuthenticated(APIView):
    def get(self, request):
        is_authenticated = is_spotify_authenticated(self.request.session.session_key)

        return Response({"status": is_authenticated}, status=status.HTTP_200_OK)


class TopArtists(APIView):
    def get(self, request):
        if not request.session.exists(request.session.session_key):
            request.session.create()

        session_id = request.session.session_key

        endpoint = "top/artists"

        response = execute_spotify_api_request(session_id, endpoint)

        return Response(response, status=status.HTTP_200_OK)
