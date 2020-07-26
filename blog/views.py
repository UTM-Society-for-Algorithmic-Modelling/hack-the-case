from django.shortcuts import render

from rest_framework import viewsets

from . import models
from . import serializers


class BlogViewSet(viewsets.ModelViewSet):
    queryset = models.blogPost.objects.all()
    serializer_class = serializers.blogSerializer
# Create your views here.
