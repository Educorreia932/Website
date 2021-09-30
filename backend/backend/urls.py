from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from backend import settings
from core.views import ProjectsViewSet, get_csrf

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/projects/", ProjectsViewSet.as_view({"get": "list"}), name="projects"),
]

urlpatterns += static(settings.STATIC_URL)
