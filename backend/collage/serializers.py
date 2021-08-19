from rest_framework import serializers

from .models import Stamp


class StampSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stamp
        fields = "__all__"
