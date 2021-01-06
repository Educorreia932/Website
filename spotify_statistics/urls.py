from django.urls import path
from .views import *

urlpatterns = [
    path("", spotify_statistics),
    path("get_auth_url", AuthURL.as_view()),
    path("redirect", spotify_callback),
    path("is_authenticated", IsAuthenticated.as_view()),
    path("top_artists", TopArtists.as_view())
]
