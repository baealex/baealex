import datetime

from django.db import models
from django.utils import timezone
from django.core.cache import cache

# Create your models here.

def is_holiday(date, holidays):
    FIXED_HOLIDAY = (
        ( 1, 1 ),
        ( 3, 1 ),
        ( 4, 8 ),
        ( 5, 5 ),
        ( 6, 6 ),
        ( 8, 15),
        (10, 3 ),
        (10, 9 ),
        (12, 25),
    )
    if (date.month, date.day) in FIXED_HOLIDAY:
        return True
    
    if holidays.filter(date=date):
        return True
    
    return False

class Membership(models.Model):
    name = models.CharField(max_length=200)
    created_date = models.DateField(default=timezone.now)
    updated_date = models.DateField(blank=True, null=True)
    event = models.CharField(max_length=200)
    dues = models.IntegerField(default=0)

    def next_date(self):
        date = self.updated_date
        study_days_counter = 0
        holidays = cache.get('holidays')
        while study_days_counter < 8:
            date += datetime.timedelta(days=7)
            if not is_holiday(date, holidays):
                study_days_counter += 1
        return date
    
    def __str__(self):
        return self.name

class Holiday(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.name