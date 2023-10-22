<script>
import axios from 'axios'


export default {
    data(){
        return{
            'quizzes':[],
            'api': 'http://127.0.0.1:8000/quiz/api/',
            'quiz': {
                'quiz':'',
                'title':'',
                'is_active':'',
            }
        }
    },
    mounted(){
        console.log('DOM is rendered');
    },
    created(){
        console.log('DOM is created');
        this.getQuiz()
    },
    methods: {
        getQuiz(){
            axios.get(this.api + 'quiz/', this.quiz).then(
                response =>{
                    console.log(response.data);
                    this.quizzes = response.data
                }
            ).catch(error =>{
                console.log(error)
            })
        }
    }
}
</script>

<template>
  <div class="quizz">
    <div class="title mt-3">
      <h3>Are you an introvert or an extrovert?</h3>

    </div>
  </div>
</template>
<style scoped>
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
</style>