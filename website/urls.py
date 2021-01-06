from django.contrib import admin
from django.urls import path

from main import views

from django.conf.urls import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.homepage),
    path('about_me', views.about_me),
    path('projects', views.projects),
    path('miscellaneous', views.miscellaneous),
    path('collage', views.collage),
    path('submit_stamp', views.submit_stamp),
    path('stone_of_golorr_properties', views.stone_of_golorr_properties),
    path('spotify_statistics/', include("spotify_statistics.urls")),
    path('captcha/', include('captcha.urls')),
    path('debug', views.debug),
]

handler403 = views.permission_denied
handler404 = views.page_not_found
