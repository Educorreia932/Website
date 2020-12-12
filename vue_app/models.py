from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=50)
    # tags = ArrayField(models.CharField(max_length=50), blank=True)
    image = models.CharField(max_length=50)
