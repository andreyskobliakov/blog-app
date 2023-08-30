import { createRouter, createWebHistory } from 'vue-router';
import About from '../pages/About.vue';
import SinglePost from '../pages/SinglePost.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  { path: '/', component: About }, // Змінено шлях на '/'
  { path: '/about', component: About },
  { path: '/post/:id', component: SinglePost },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
