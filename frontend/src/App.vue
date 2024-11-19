<template>
  <div id="app">
    <AnonymityPolicy v-if="!policyConfirmed" @confirmed="policyConfirmed = true" />
    <CourseEvaluationForm v-else msg="Welcome to Your Course Evaluation System" />
  </div>
</template>

<script>
import AnonymityPolicy from './components/AnonymityPolicy.vue';
import CourseEvaluationForm from './components/CourseEvaluationForm.vue';

export default {
  name: 'App',
  components: {
    AnonymityPolicy,
    CourseEvaluationForm,
  },
  data() {
    return {
      policyConfirmed: false, // Tracks whether the user has confirmed the anonymity policy
    };
  },
};
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
