from django.urls import path

from .views import BlogViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', BlogViewSet, basename='blogs')
urlpatterns = router.urls 
