from django.core.files.storage import FileSystemStorage
from django.db import models


class Tag(models.Model):
    name = models.TextField(max_length=50)


class Project(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=50)
    project_url = models.CharField(max_length=200, blank=True)
    image = models.ImageField(storage=FileSystemStorage(location='/static/projects'))
    tags = models.ManyToManyField(Tag, blank=True)
