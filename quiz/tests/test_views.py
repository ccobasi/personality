from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from quiz.models import Question, Quizzes, Category
from quiz.serializers import QuestionSerializer, RandomQuestionSerializer


class QuizViewSetTest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_quiz_view_set(self):
        category = Category.objects.create(name='Test Category')
        quiz = Quizzes.objects.create(title='Test Quiz')
        question = Question.objects.create(title='Test Question', quiz=quiz)
        response = self.client.get('http://127.0.0.1:8000/quiz/api/') 
        expected_data = QuestionSerializer([question], many=True).data
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        

class RandomQuestionTest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_random_question_view(self):
        category = Category.objects.create(name='Test Category')
        quiz = Quizzes.objects.create(title='Test Quiz')
        question = Question.objects.create(title='Test Question', quiz=quiz)
        response = self.client.get('http://127.0.0.1:8000/quiz/r/temperament/')  
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        


