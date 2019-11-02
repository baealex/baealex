from django.contrib.auth.models import User
from .models import Memo
from rest_framework import serializers

class MemoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Memo
        fields = ['url', 'pk', 'created_date', 'title', 'content', 'view_count']