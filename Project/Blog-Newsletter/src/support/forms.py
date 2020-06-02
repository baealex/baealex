from django import forms
from django.contrib.auth.forms import UserChangeForm
from .models import *

class SubscriberForm(forms.ModelForm):
    class Meta:
        model = Subscriber
        fields = ('email', 'name')

        widgets={
            'email':forms.TextInput(attrs={'placeholder':'이메일 주소','class':'form-control'}),
            'name':forms.TextInput(attrs={'placeholder':'이름','class':'form-control'}),
        }
        labels={
            'email':'',
            'name':'',
        }