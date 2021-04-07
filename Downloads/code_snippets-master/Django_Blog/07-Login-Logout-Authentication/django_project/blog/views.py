from django.shortcuts import render
from .models import RaiseTicket


def home(request):
    context = {
        'posts': RaiseTicket.objects.all()
    }
    return render(request, 'blog/home.html', context)


def about(request):
    return render(request, 'blog/about.html', {'title': 'About'})
