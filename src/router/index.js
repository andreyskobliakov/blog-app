import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Posts from "../pages/Posts.vue";
import SinglePost from "../pages/SinglePost.vue";
import Contact from "../pages/Contact.vue";
import LayoutLogin from "../components/LayoutLogin.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/posts", component: Posts },
  { path: "/post/:id", component: SinglePost },
  {
    path: "/login",
    component: LayoutLogin,
    children: [
      {
        path: "",
        name: "Login",
        component: () =>
          import("../pages/Login.vue"),
        meta: {
          layout: "LayoutLogin", 
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
