<template>
  <div id="app">
    <CourseEvaluationForm msg="Welcome to Your Course Evaluation System"/>
  </div>
</template>

<script>
import CourseEvaluationForm from './components/CourseEvaluationForm.vue';

export default {
  name: 'App',
  components: {
    CourseEvaluationForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
