from django.shortcuts import redirect
from requests import Request
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .utils import *

csrf = ""


class AuthURL(APIView):
    def get(self, request):
        """
        Generate authentication URL for user
        """

        scope = "user-read-playback-state user-top-read"

        url = Request("GET", "https://accounts.spotify.com/authorize", params={
            "scope": scope,
            "response_type": "code",
            "redirect_uri": env("SPOTIFY_REDIRECT"),
            "client_id": env("SPOTIFY_CLIENT_ID")
        }).prepare().url

        return Response({"url": url}, status=status.HTTP_200_OK)


def spotify_callback(request):
    code = request.GET.get("code")

    response = post("https://accounts.spotify.com/api/token", data={
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": env("SPOTIFY_REDIRECT"),
        "client_id": env("SPOTIFY_CLIENT_ID"),
        "client_secret": env("SPOTIFY_CLIENT_SECRET")
    }).json()

    access_token = response.get("access_token")
    token_type = response.get("token_type")
    refresh_token = response.get("refresh_token")
    expires_in = response.get("expires_in")

    global csrf
    session_id = csrf

    update_or_create_user_tokens(session_id, access_token, token_type, expires_in, refresh_token)

    return redirect(env("FRONTEND_ROOT") + "/spotify_statistics")


class IsAuthenticated(APIView):
    def get(self, request):
        session_id = request.headers["X-CSRFToken"]

        is_authenticated = is_spotify_authenticated(session_id)
        global csrf
        csrf = session_id

        return Response({"status": is_authenticated}, status=status.HTTP_200_OK)


class TopArtists(APIView):
    def get(self, request):
        session_id = request.headers["X-CSRFToken"]

        time_range = request.GET.get("time_range")

        endpoint = f"top/artists?time_range={time_range}"

        response = execute_spotify_api_request(session_id, endpoint)

        return Response(response, status=status.HTTP_200_OK)
