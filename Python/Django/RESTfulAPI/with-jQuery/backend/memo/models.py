from django.db import models
from django.utils import timezone

# Create your models here.

class Memo(models.Model):
    created_date = models.DateTimeField(default=timezone.now())
    title = models.CharField(max_length=50)
    content = models.TextField()
    view_count = models.IntegerField(default=0)