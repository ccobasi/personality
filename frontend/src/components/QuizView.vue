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
      console.log(quizzes);
    }
  ).catch(error => {
    console.log(error);
  });
};
getQuiz()
const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = ref(0)


const getCurrentQuestion = computed(() => {
  const index = currentQuestion.value;
  if (index >= 0 && index < quizzes.value.length) {
    let question = quizzes.value[index];
    console.log(question);
    question.index = index;
    return question;
  } else {
    return null; 
  }
});



const SetAnswer = (e) => {
	quizzes.value[currentQuestion.value].selected = e.target.value
	e.target.value = null
}

const NextQuestion = () => {
	if (currentQuestion.value < quizzes.value.length - 1) {
		currentQuestion.value++
		return
	}
	
	quizCompleted.value = true
}
const nextQuestion = () => {
  if (currentIndex.value < quizzes.value.length - 1) {
    currentIndex.value++;
    return
  }
  quizCompleted.value = true
};

const threshold = 4; 


const selectAnswer = () => {
  const currentQuestion = quizzes.value[currentIndex.value];

  if (currentQuestion.selected !== null) {
    const selectedAnswer = currentQuestion.selected;
    const isCorrect = currentQuestion.answer[selectedAnswer].is_introvert;

    if (isCorrect) {
      score.value += 1;
    }

    console.log('Current Score:', score.value);
  }

  if (currentIndex.value < quizzes.value.length - 1) {
    currentIndex.value++;
  }
};

const isLastQuestion = computed(() => currentIndex === quizzes.length - 1);


onMounted(() => {
  console.log('DOM is rendered');
  getQuiz();
  console.log(quizzes)

});

</script>

<template>
  <div>
    <h1>Quizzes</h1>
    <section class="quiz" v-if="!quizCompleted">
      <div class="quiz-info">
        <div v-if="getCurrentQuestion">
          <span class="question">{{ getCurrentQuestion.title }}</span>
          <p class="opts">
            <label v-for="(i,index) in getCurrentQuestion.answer" :key="i.id" :class="`option ${
						getCurrentQuestion.selected == index 
							? index == getCurrentQuestion.answer.answer_text 
								? 'is_introvert' 
								: 'is_extrovert'
							: ''
					} ${
						getCurrentQuestion.selected != null &&
						index != getCurrentQuestion.selected
							? 'disabled'
							: ''
					}`">
              <input type="radio" :id="'i' + index" :name="'question' + getCurrentQuestion.index" :value="index" v-model="getCurrentQuestion.selected" @change="selectAnswer" />

              {{index + 1}}{{ i.answer_text }}

            </label>
          </p>
        </div>
        <div class=" options">

        </div>
      </div>

      <button @click="NextQuestion" :disabled="!getCurrentQuestion || getCurrentQuestion.selected === null">
        {{ 
          isLastQuestion 
      ? 'Finish' 
      : (getCurrentQuestion && getCurrentQuestion.selected === null)
        ? 'Select an option'
        : 'Next question'
      
				}}
        Next Question
      </button>
    </section>
    <section v-else>
      <h2>You have finished the quiz!</h2>
      <h2>Total Score: {{ score }}</h2>
      <p>Person is {{ score >= threshold ? 'Introverted' : 'Extroverted' }}</p>
    </section>
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
.opts {
  text-align: left;
}
</style>