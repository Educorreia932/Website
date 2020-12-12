from django.shortcuts import render

def homepage(request):
    return render(request, 'vue_app/homepage.html')

def about_me(request):
    return render(request, 'vue_app/about_me.html')

def projects(request):
    return render(request, 'vue_app/projects.html')
