<script setup>
import axios from 'axios';
import { ref, reactive, computed, onMounted } from "vue";


const api = 'http://127.0.0.1:8000/quiz/api/';
const quiz = reactive({
  answer: '',
  title: '',
  is_introvert: '',
});
const quizzes = ref([]);
const currentIndex = ref(0);

const getQuiz = () => {
  axios.get(api + 'quiz/', quizzes).then(
    (response) => {
      console.log(response.data);
      quizzes.value = response.data;
    }
  ).catch(error => {
    console.log(error);
  });
};

const nextQuestion = () => {
  if (currentIndex.value < quizzes.value.length - 1) {
    currentIndex.value++;
  }
};

const currentQuestion = computed(() => {
  return quizzes.value[currentIndex.value];
});

onMounted(() => {
  console.log('DOM is rendered');
  getQuiz();

});

</script>

<template>
  <div>
    <h1>Quizzes</h1>

    <div v-if="currentQuestion">
      <h2>{{ currentQuestion.title }}</h2>
      <p>{{ currentQuestion.answer }}</p>
    </div>
    <button @click="nextQuestion" :disabled="currentIndex === quizzes.length - 1">
      Next Question
    </button>
  </div>
</template>
<style scoped>
body {
  background-color: #271c36;
  color: #fff;
}
.quizz {
  display: flex;
  margin-top: 40px;
  padding: 0px 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  align-self: stretch;
  border-radius: 10px;
  background: #fff;
  height: 450px;
}
.title {
  align-self: stretch;
  color: var(--Black, #000);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.8px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.quiz {
  background-color: #382a4b;
  padding: 1rem;
  width: 100%;
  max-width: 640px;
}

.quiz-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.quiz-info .question {
  color: #8f8f8f;
  font-size: 1.25rem;
}

.quiz-info.score {
  color: #fff;
  font-size: 1.25rem;
}

.options {
  margin-bottom: 1rem;
}

.option {
  padding: 1rem;
  display: block;
  background-color: #271c36;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.option:hover {
  background-color: #2d213f;
}

.option.correct {
  background-color: #2cce7d;
}

.option.wrong {
  background-color: #ff5a5f;
}

.option:last-of-type {
  margin-bottom: 0;
}

.option.disabled {
  opacity: 0.5;
}

.option input {
  display: none;
}

button {
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #2cce7d;
  color: #2d213f;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.2rem;
  border-radius: 0.5rem;
}

button:disabled {
  opacity: 0.5;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

p {
  color: #8f8f8f;
  font-size: 1.5rem;
  text-align: center;
}
</style>