<template>
  <Layout>
    <template #header></template>
    <div class="container mx-auto">
      <ul>
        <SinglePostCard v-for="post in posts" :key="post.id" :post="post" />
      </ul>
    </div>
    <template #footer>
      <Footer />
    </template>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SinglePostCard from '../components/SinglePostCard.vue';
import Layout from '../components/Layout.vue';
import Footer from '../components/Footer.vue';

const posts = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts.value = response.data.slice(0, 10);
  } catch (error) {
    console.error('Помилка при отриманні даних з API:', error);
  }
});
</script>
