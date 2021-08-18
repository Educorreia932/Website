from django.db import models


class Stamp(models.Model):
    source = models.TextField()
    name = models.TextField()
    x = models.IntegerField
    y = models.IntegerField
    submitted_on = models.DateTimeField()
    ip = models.TextField()
