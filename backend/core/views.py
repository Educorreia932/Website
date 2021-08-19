from django.http import JsonResponse
from django.middleware.csrf import get_token
from rest_framework import viewsets
from rest_framework.response import Response

from core.models import *
from core.serializers import ProjectSerializer


class ProjectsViewSet(viewsets.ModelViewSet):
    pass


def get_csrf(request):
    response = JsonResponse({'detail': 'CSRF cookie set'})
    response['X-CSRFToken'] = get_token(request)

    return response
