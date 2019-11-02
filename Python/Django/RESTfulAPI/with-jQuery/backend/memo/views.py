from django.contrib.auth.models import User
from .models import Memo
from rest_framework import viewsets
from .serializers import *

# Create your views here.

class MemoViewSet(viewsets.ModelViewSet):
    queryset = Memo.objects.all().order_by('created_date')
    serializer_class = MemoSerializer