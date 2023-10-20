from django.shortcuts import render
from rest_framework import generics


class Quiz(generics.ListAPIView):
    