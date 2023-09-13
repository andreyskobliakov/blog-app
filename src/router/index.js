import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Posts from "../pages/Posts.vue";
import SinglePost from "../pages/SinglePost.vue";
import Contact from "../pages/Contact.vue";
import LayoutLogin from "../components/LayoutLogin.vue"; // Импортируем BlankLayout

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/posts", component: Posts },
  { path: "/post/:id", component: SinglePost },
  {
    path: "/login",
    component: LayoutLogin, // Используем BlankLayout для страницы Login
    children: [
      {
        path: "",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../pages/Login.vue"),
        meta: {
          layout: "LayoutLogin", // Указываем макет для этой страницы
        },
      },
    ],
  },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
