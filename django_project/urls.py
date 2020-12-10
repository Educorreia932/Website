from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from vue_app import views as vue_views 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', vue_views.homepage),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
