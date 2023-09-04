<template>
  <Layout>
    <div class="container mx-auto">
      <ul>
        <SinglePostCard v-for="post in posts" :key="post.id" :post="post" />
      </ul>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SinglePostCard from '../components/SinglePostCard.vue';
import Layout from '../components/Layout.vue';
import { useToast } from 'vue-toastification'; // Импортируйте useToast

const posts = ref([]);
const toast = useToast(); // Инициализируйте useToast

onMounted(loadPosts);

async function loadPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts.value = response.data.slice(0, 10);
    showInfoToast('Loading content', 2000);
    setTimeout(() => {
      showSuccessToast('Content loaded OK', 1000);
    }, 2000);
  } catch (error) {
    console.error('Error fetching data from API:', error);
  }
}

function showInfoToast(message, timeout) {
  toast.info(message, {
    timeout: timeout
  });
}

function showSuccessToast(message, timeout) {
  toast.success(message, {
    timeout: timeout
  });
}
</script>
