import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Posts from '../pages/Posts.vue';
import SinglePost from '../pages/SinglePost.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home }, 
  { path: '/posts', component: Posts },
  { path: '/post/:id', component: SinglePost },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
