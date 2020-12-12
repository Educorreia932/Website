from django.shortcuts import render

from .models import Project
from .serializers import ProjectSerializer

def homepage(request):
    return render(request, 'homepage.html')

def about_me(request):
    return render(request, 'about_me.html')

def projects(request):
    queryset = Project.objects.all()
    serializer = ProjectSerializer(queryset, many=True)
    projects_data = serializer.data

    context = {
        "projects": projects_data
    }

    return render(request, 'projects.html', context)

def miscellaneous(request):
    return render(request, 'miscellaneous.html')
