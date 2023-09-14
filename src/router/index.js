import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BooksList from '../views/BooksList.vue';
import Admin from '../views/Admin.vue';
import Description from '../views/Description.vue'; // Corrected component name

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/bookslist',
      name: 'bookslist',
      component: BooksList
    },
    {
      path: '/Description', 
      name: 'Description', 
      component: Description 
    },
  ]
});

export default router;
