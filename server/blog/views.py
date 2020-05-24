from django.shortcuts import render
from .models import *
from django.contrib.auth.models import User
from rest_framework import status, serializers, 
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
# Create your views here.

class PostSer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["_id", "title", 'author', 'updated_on', 'content', 'created_on', 'status']


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

@api_view(['GET', "POST"])
def posts_list(request):
    if request.method == "GET":
        posts = Post.objects.all()
        ser = PostSer(posts, many=True)
        return JSONParser(ser.data, safe=False)

    elif request.method == "POST":
        data = JSONParser().parse(request)
        try:
            title = data["title"]
            creating = data["creating"]
            author_name = data["author_name"]
            author = User.objects.get(username=authoer_name)
            updated_on = data['updated_on']
            content = data["content"]
            created_on = data['created_on']
            status = data['status']
            p = Post(title=tile, author=author, updated_on=updated_on, content=content, created_on=created_on, content=content, status=status)
            p.save()
            result = {"result":"created post successfully !"}
            return Response(result, status=200)
        except Exception as e:
            result = {"result":"fail to create"}
            return Response(result, status=400)

@api_view(['POST'])
def get_post(request):
    if request.method == "POST":
        data = request.data
        _id = data["id"]
        try:
            p = Post.object.get(pk=_id)
            result = {
                "title":p.title,
                "content": p.content,
                "updated_on":updated_on,
                "read_time":read_time
            }
            return Response(result, status=200)

        except Exception as e:
            return Response({"result":"Not Found"}, status=404})





        




