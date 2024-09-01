import { createRouter, createWebHistory } from 'vue-router';
import RecipeList from '@/components/RecipeList.vue';
import RecipeForm from '@/components/RecipeForm.vue';
import RecipeDetails from '@/components/RecipeDetails.vue';

const routes = [
  { path: '/', component: RecipeList },
  { path: '/add', component: RecipeForm },
  { path: '/edit/:id', component: RecipeForm },
  { path: '/details/:id', component: RecipeDetails }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
