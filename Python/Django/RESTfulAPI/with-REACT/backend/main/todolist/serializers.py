from django.contrib.auth.models import User
from .models import TodoItem
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email']

class TodoItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TodoItem
        fields = ['url', 'content', 'created_date', 'clear_date', 'is_clear']