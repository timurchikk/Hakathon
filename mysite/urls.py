from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from drf_yasg import openapi
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from django.conf import settings
from django.conf.urls.static import static

schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
   path('', include('blog.urls')),
    path('admin/', admin.site.urls),
    path('api/v1/', include('blog.urls')),
    path('api/v1/base-auth/', include('rest_framework.urls')),
    path('api/v1/auth/', include('djoser.urls')),
    path('api/v1/auth_token/', include('djoser.urls.authtoken')),
    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

if settings.DEBUG:
   urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)