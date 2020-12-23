from django.contrib import admin
from django.urls import path

from main import views

urlpatterns = {
    path('admin/', admin.site.urls),
    path('', views.homepage),
    path('about_me', views.about_me),
    path('projects', views.projects),
    path('miscellaneous', views.miscellaneous),
    path('collage', views.collage),
    path('debug', views.debug),
}
