<script setup>
import NavBar from '../src/components/NavBar.vue';
import QuizView from '../src/components/QuizView.vue'


</script>

<template>
  <NavBar />

  <body>
    <QuizView />
  </body>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
body {
  background: var(--Grey-Light, #eee);
  color: #000;
  height: 100vh;
  padding: 30px 250px;
}
</style>
