from django.contrib.auth.models import User
from .models import TodoItem
from rest_framework import viewsets
from main.todolist.serializers import *

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = TodoItem.objects.all().order_by('created_date')
    serializer_class = TodoItemSerializer