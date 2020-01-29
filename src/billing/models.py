from django.db import models
from django.utils import timezone

# Create your models here.

class Membership(models.Model):
    name = models.CharField(max_length=200)
    created_date = models.DateField(default=timezone.now)
    event = models.CharField(max_length=200)
    dues = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name

class Holiday(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.name