<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
      <h1 class="text-2xl font-semibold mb-4">Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700 font-semibold">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import LayoutLogin from "../components/LayoutLogin.vue"; // Подставьте фактический путь
import { ref } from "vue";

const email = ref("");
const password = ref("");
</script>

<script>
export default {
  name: "Login",
  components: {
    LayoutLogin, // Здесь добавляем компонент LayoutLogin
  },
};
</script>
