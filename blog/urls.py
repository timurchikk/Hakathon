from django.urls import path
from .views import *


urlpatterns = [
    # path('', main, name='home'),
    path('create_category/', CategoryCreateView.as_view()),
    path('update_category/<int:pk>/', CategoryUpdateView.as_view()),
    path('list_category/' , CategoryListView.as_view()),
    path('create_product/', ProductCreateView.as_view()),
    path('update_product/<int:pk>/', ProductUpdateView.as_view()),
    path('list_product/', ProductListView.as_view()),
]