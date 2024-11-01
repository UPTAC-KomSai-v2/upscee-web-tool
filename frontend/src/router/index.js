import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AnalyticsView from '../views/AnalyticsView.vue';
import EvaluationForm from '../components/EvaluationForm.vue';
import ReviewPage from '../components/ReviewPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: HomeView },
    { path: '/evaluate', component: EvaluationForm },
    { path: '/review', component: ReviewPage },
    { path: '/analytics', component: AnalyticsView }
  ]
});
