from django.db import models
from django.utils import timezone

class TodoItem(models.Model):
    content = models.CharField(max_length=200)
    created_date = models.DateTimeField(default=timezone.now)
    clear_date = models.DateTimeField(default=timezone.now)
    is_clear = models.BooleanField(default=False, blank=True)
    
    def __str__(self):
        return self.content