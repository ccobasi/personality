from .models import *
from rest_framework import generics
from rest_framework.response import Response
from .serializers import *
from rest_framework.views import APIView

class Quiz(generics.ListAPIView):
    serializer_class = QuizSerializer
    queryset = Quizzes.objects.all()