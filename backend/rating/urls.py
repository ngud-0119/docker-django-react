from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListRating.as_view()),
    path('<int:pk>/', views.DetailRating.as_view()),
]
