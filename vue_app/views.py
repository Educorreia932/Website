from django.shortcuts import render

def homepage(request):
    return render(request, 'vue_app/homepage.html')
