from django.shortcuts import render

import json
import random

from .models import Project
from .serializers import ProjectSerializer

def get_kaomoji(category):
    with open("static/kaomoji.json", "r", encoding="utf8") as file:
        kaomoji = json.load(file)["kaomoji"]

    return random.choice(kaomoji[category])

# Main pages

def homepage(request):
    context = {
        "kaomoji": get_kaomoji("greeting")
    }

    return render(request, 'homepage.html', context)

def about_me(request):
    context = {
        "kaomoji": get_kaomoji("sympathy")
    }

    return render(request, 'about_me.html', context)

def projects(request):
    queryset = Project.objects.all()
    serializer = ProjectSerializer(queryset, many=True)
    projects_data = serializer.data

    context = {
        "projects": projects_data,
        "kaomoji": get_kaomoji("cat")
    }

    return render(request, 'projects.html', context)

def miscellaneous(request):
    context = {
        "kaomoji": get_kaomoji("anger")
    }

    return render(request, 'miscellaneous.html', context)

def collage(request):
    return render(request, "collage.html")

def stone_of_golorr_properties(request):
    return render(request, "stone-of-golorr.html")

def debug(request):
    context = {
        "kaomoji": get_kaomoji("indifference")
    }

    return render(request, "debug.html", context)

# Error pages

def permission_denied(request, exception):
    return render(request, "error/403.html", status=403)

def page_not_found(request, exception):
    return render(request, "error/404.html", status=404)
