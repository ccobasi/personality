from django.test import TestCase
from django.utils.translation import gettext_lazy as _
from quiz.models import Category, Quizzes, Question, Answer, Result
from django.contrib.auth.models import User

class CategoryModelTest(TestCase):
    def test_str_representation(self):
        category = Category(name='Test Category')
        self.assertEqual(str(category), 'Test Category')

class QuizzesModelTest(TestCase):
    def test_str_representation(self):
        quiz = Quizzes(title='Test Quiz')
        self.assertEqual(str(quiz), 'Test Quiz')

class QuestionModelTest(TestCase):
    def test_str_representation(self):
        question = Question(title='Test Question')
        self.assertEqual(str(question), 'Test Question')


class AnswerModelTest(TestCase):
    def test_str_representation(self):
        answer = Answer(answer_text='Test Answer')
        self.assertEqual(str(answer), 'Test Answer')

       