from rest_framework import viewsets
from rest_framework.response import Response

from core.models import *


class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()

    def list(self, request, **kwargs):
        serializer = ProjectSerializer(self.queryset, many=True, context={'request': request})

        return Response(serializer.data)
