from django.contrib import admin
from django.urls import include, path
from . import views

urlpatterns = [
    path('newsletter', views.send_newsletter, name='send_newsletter'),
    path('newsletter/test', views.send_newsletter_test, name='send_newsletter_test'),
    
    path('subscribe', views.subscribe, name='subscribe'),
    path('subscribe/active/<token>', views.active_email, name='active_email'),
    path('subscribe/block/<email_hash>', views.block_email, name='block_email'),
]
