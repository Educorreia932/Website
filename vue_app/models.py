from django.contrib.postgres.fields import ArrayField
from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=50)
    tags = ArrayField(models.CharField(max_length=50))
    image = models.CharField(max_length=50)
