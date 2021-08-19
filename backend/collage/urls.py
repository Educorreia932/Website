from django.urls import path

from .views import *

urlpatterns = [
    path("list", StampViewSet.as_view({"get": "list"}))
]