from django.test import TestCase
from .models import *
from datetime import datetime
from views import * 
# Create your tests here.

class PostTestCase(TestCase):
    def setUp(self):
        u = User.objects.get(username="Timmy")
        Post.objects.create(
            title="Post 1",
            author= u,
            updated_on = datetime.now(),
            content = "This is the first Blog !",
            created_on = datetime.now(),
            status = 1
        )
        Post.objects.create(
            title="Post 2",
            author= u,
            updated_on = datetime.now(),
            content = "This is the Second Blog !",
            created_on = datetime.now(),
            status = 1
        )
    

