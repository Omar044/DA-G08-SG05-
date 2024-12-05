from django.shortcuts import render
from django.core import serializers
from .models import *
from .serializer import AlbumSerializer
from rest_framework import viewsets

class AlbunesView(viewsets.ModelViewSet):

    queryset = Album.objects.all()
    serializer_class = AlbumSerializer