from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),

    path('members', views.members, name='members'),
    path('members/<int:pk>', views.members_detail, name='members_detail'),
    path('holiday', views.holiday, name='holiday'),
    path('holiday/<int:pk>', views.holiday, name='holiday'),
]