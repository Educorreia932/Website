from rest_framework import serializers

from core.models import Tag, Project


class StampSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"
