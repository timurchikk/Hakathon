from django.views import View
from blog.serializers import CategorySerializer, ProductSerializer
from django.db.models.query import QuerySet
from django.shortcuts import redirect, render
from django.contrib.auth import login, logout
from django.shortcuts import render
from django.contrib import messages
from .models import *
from .forms import *
from inspect import isabstract
from django.core.mail import send_mail
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.authentication import TokenAuthentication, SessionAuthentication

# def main(request):
#     category = Category.objects.all()
#     product = Product.objects.all()
#     context = {
#         'category' : category,
#         'product' : product,
#     }
#     return render(request, template_name='blog/index.html', context=context)



def send_mail(request):
    if request.method == 'POST':
        form = SendMailForm(request.POST)
        if form.is_valid():
            mail = send_mail(form.cleaned_data['theme'], form.cleaned_data['text'], 'tim24122003@gmail.com', [f'{forms.email}'], fail_silently=True)
            if mail:
                messages.success(request, 'Successful')
                return redirect('contact')
            else:
                messages.error(request, 'Error')
        else:
            messages.error(request, 'Valid error')
    else:
        form = SendMailForm()
    context = {
        'form' : form,
    }
    return render(request, context=context)

class CategoryCreateView(generics.CreateAPIView):
    serializer_class = CategorySerializer

class CategoryUpdateView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class CategoryListView(generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    authentication_classes = (TokenAuthentication, SessionAuthentication)

class ProductCreateView(generics.CreateAPIView):
    serializer_class = ProductSerializer

class ProductUpdateView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class ProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    authentication_classes = (TokenAuthentication, SessionAuthentication)



# class  CartVeiw(View):