from django.db import models
from rest_framework import serializers


class Tag(models.Model):
    name = models.TextField(max_length=50)


class Project(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=50)
    project_url = models.CharField(max_length=200, blank=True)
    illustration_url = models.CharField(max_length=200, blank=True)
    tags = models.ManyToManyField(Tag, blank=True)


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)

    class Meta:
        model = Project
        fields = "__all__"
