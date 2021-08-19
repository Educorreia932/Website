from django.shortcuts import render
from rest_framework import viewsets

from .models import Stamp
from .serializers import StampSerializer


class StampViewSet(viewsets.ModelViewSet):
    serializer_class = StampSerializer

    queryset = Stamp.objects.all()[::-1]

