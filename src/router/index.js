import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BooksList from '../views/BooksList.vue';
import Admin from '../views/Admin.vue';
import Description from '../views/Description.vue'; 
import AdminUpdateBook from '../views/AdminUpdateBook.Vue'; 
import AdminCreateBook from '../views/AdminCreateBook.Vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
   
    {
      path: '/bookslist',
      name: 'bookslist',
      component: BooksList
    },
    {
      path: '/Description/:id', 
      name: 'Description', 
      component: Description 
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
   
    {
      path: '/AdminUpdateBook/:id',
      name: 'adminupdatebook',
      component: AdminUpdateBook
    },
   
    {
      path: '/AdminCreateBook',
      name: 'AdminCreateBook',
      component: AdminCreateBook
    },
   
   
   
  ]
});

export default router;
