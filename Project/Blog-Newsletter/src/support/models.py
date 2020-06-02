from django.db import models
from django.utils import timezone
import requests
import random

def parsedown(text):
    data = {'md': text.encode('utf-8')}
    res = requests.post('http://baealex.dothome.co.kr/api/parsedown/get.php', data=data)
    return res.text

def randstr(length):
    rstr = '0123456789abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ'
    rstr_len = len(rstr) - 1
    result = ''
    for i in range(length):
        result += rstr[random.randint(0, rstr_len)]
    return result

def baealex_hash(datas):
    result = 0
    for data in datas:
        result += pow(ord(data), 4)
    return hex(result)

class Subscriber(models.Model):
    is_active = models.BooleanField(default=False)
    token = models.CharField(max_length=64)
    email = models.CharField(max_length=64, unique=True)
    name = models.CharField(max_length=20)
    count = models.IntegerField(default=0)
    created_date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.email

class News(models.Model):
    title = models.CharField(max_length=50)
    text_md = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title