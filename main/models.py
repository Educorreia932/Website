from django.db import models


class Tag(models.Model):
    name = models.TextField(max_length=50)


class Project(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=50)
    project_url = models.CharField(max_length=200, blank=True)
    illustration_url = models.CharField(max_length=200, blank=True)
    tags = models.ManyToManyField(Tag, blank=True)


class Stamp(models.Model):
    image_url = models.CharField(max_length=300)
    submitted_date = models.DateTimeField(blank=True, null=True, auto_now_add=True)
    x = models.FloatField()
    y = models.FloatField()
