<template>
  <Layout>
    <template #header>
    </template>

    <div class="container mx-auto p-4">
      <div class="bg-yellow-200 rounded-lg p-6 shadow-md">
        <h2 class="text-lg font-semibold">Contact Form</h2>
        <form class="mt-4" @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="mt-2 block w-full py-2 px-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="mt-2 block w-full py-2 px-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700">Text</label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="4"
              class="mt-2 block w-full py-2 px-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue';
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: '',
});
</script>

<style scoped>
</style>
