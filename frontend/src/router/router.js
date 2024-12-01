import { createRouter, createWebHistory } from 'vue-router'; // Correct import for Vue Router 4
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import Form from '../components/CourseEvaluationForm.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/form', component: Form }, // After login
  { path: '/', redirect: '/login' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
