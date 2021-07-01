from django.http import JsonResponse
from django.middleware.csrf import get_token
from rest_framework import viewsets
from rest_framework.response import Response

from core.models import *


class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()[::-1]

    def list(self, request, **kwargs):
        serializer = ProjectSerializer(self.queryset, many=True, context={'request': request})

        return Response(serializer.data)


def get_csrf(request):
    response = JsonResponse({'detail': 'CSRF cookie set'})
    response['X-CSRFToken'] = get_token(request)

    return response
