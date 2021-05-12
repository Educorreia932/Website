from django.http import HttpResponse
from django.shortcuts import render

import json
import random
from django.views.decorators.csrf import csrf_exempt

from .forms import StampForm
from .models import *
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

    return render(request, 'pages/homepage.html', context)


def about_me(request):
    context = {
        "kaomoji": get_kaomoji("sympathy")
    }

    return render(request, 'pages/about_me.html', context)


def projects(request):
    queryset = Project.objects.all()
    serializer = ProjectSerializer(queryset, many=True)
    projects_data = serializer.data

    context = {
        "projects": projects_data,
        "kaomoji": get_kaomoji("cat")
    }

    return render(request, 'pages/projects.html', context)


def miscellaneous(request):
    context = {
        "kaomoji": get_kaomoji("indifference")
    }

    return render(request, 'pages/miscellaneous.html', context)


def collage(request):
    stamps_data = Stamp.objects.all()

    context = {
        "stamps": stamps_data
    }

    return render(request, "pages/collage.html", context)


# TODO: Check for CSRF token
@csrf_exempt
def submit_stamp(request):
    if request.method == "POST":
        stamp = Stamp(
            image_url=request.POST.get("image_url"),
            x=request.POST.get("x"),
            y=request.POST.get("y")
        )

        stamp.save()

        return HttpResponse(
            json.dumps(r"Success"),
            content_type="application/json"
        )


def stone_of_golorr_properties(request):
    return render(request, "pages/stone_of_golorr.html")


def break_in(request):
    return render(request, "break_in/break_in.html")


# Error pages

def permission_denied(request, exception):
    return render(request, "error/403.html", status=403)


def page_not_found(request, exception):
    return render(request, "error/404.html", status=404)


# DEBUG ---------------------------

@csrf_exempt
def debug(request):
    if request.POST:
        form = StampForm(request.POST)

        if form.is_valid():
            print("CAPTCHA Sucess")

    else:
        form = StampForm()

    return render(request, "debug.html", {'form': form})
