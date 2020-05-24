from django.conf.urls import url, include
from django.contrib.auth.models import User
from .models import *
from django.urls import path
from rest_framework import routers, serializers, viewsets
from .views import *



urlpatterns = [
    path('posts/', posts_list),
    path('get_post/', get_post),

]