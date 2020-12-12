from django.shortcuts import render
from .models import Project

def homepage(request):
    return render(request, 'vue_app/homepage.html')

def about_me(request):
    return render(request, 'vue_app/about_me.html')

def projects(request):
    projects = Project.objects.all()

    context = {
        "projects": projects
    }

    return render(request, 'vue_app/projects.html', context)
