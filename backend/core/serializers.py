from rest_framework import serializers

from core.models import Tag, Project


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