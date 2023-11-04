from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

app_name='quiz'

router = DefaultRouter()
router.register('quiz', QuizViewSet, basename='quiz')

urlpatterns = [
    path('', Quiz.as_view(), name='quiz'),
    path('r/<str:topic>/', RandomQuestion.as_view(), name='random '),
    path('q/<str:topic>/', QuizQuestion.as_view(), name='questions'),
    path('api/', include(router.urls))
]