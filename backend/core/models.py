from django.core.files.storage import FileSystemStorage
from django.db import models
from rest_framework import serializers


class Tag(models.Model):
    name = models.TextField(max_length=50)


class Project(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=50)
    project_url = models.CharField(max_length=200, blank=True)
    image = models.ImageField(storage=FileSystemStorage(location='/static/projects'))
    tags = models.ManyToManyField(Tag, blank=True)


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    tags = TagSerializer(many=True)

    class Meta:
        model = Project
        fields = "__all__"

    def get_image_url(self, project):
        return project.image.url
