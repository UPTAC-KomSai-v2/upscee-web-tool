import { createApp } from 'vue'; // Correct import for Vue 3
import axios from './axios';
import App from './App.vue';
import router from './router/router';

const app = createApp(App);
app.config.globalProperties.$axios = axios; // Set global axios instance
app.use(router); // Use the router
app.mount('#app');
