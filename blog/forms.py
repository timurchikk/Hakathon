from django import forms
from .models import *
from django.core.exceptions import ValidationError
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from captcha.fields import CaptchaField


class RegisterForm(UserCreationForm):
    firstname = forms.CharField(label='First name', widget=forms.TextInput(attrs={'class' : 'form-control'}))
    lastname = forms.CharField(label='Last name', widget=forms.TextInput(attrs={'class' : 'form-control'}))
    email = forms.EmailField(label='E-Mail', widget=forms.EmailInput(attrs={'class' : 'form-control'}))
    password = forms.CharField(label='Password',widget=forms.PasswordInput(attrs={'class' : 'form-control'}) )
    captcha = CaptchaField()

class LoginForm(AuthenticationForm):
    email = forms.EmailField(label='E-Mail', widget=forms.EmailInput(attrs={'class' : 'form-control'}))
    password = forms.CharField(label='Password', widget=forms.PasswordInput(attrs={'class' : 'form-control'}))

class SendMailForm(forms.Form):
    email = forms.EmailField(label='E-Mail', widget=forms.EmailInput(attrs={'class' : 'form-control'}))

    theme = "Оформите подписку и получите 10% скидку на следующий заказ"
    text = "Промокод: linkus0000"