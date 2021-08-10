from django.db import models


class Category(models.Model):
    title = models.CharField(verbose_name='Category', max_length=255)

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__ (self):
        return self.title

class Product(models.Model):
    title = models.CharField(verbose_name='Title', max_length=255)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d')
    description = models.CharField(verbose_name='Описание', max_length=255)
    price = models.IntegerField(verbose_name='Цена')