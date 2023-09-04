<template>
  <Layout>
    <div class="container mx-auto">
      <Loader v-if="isLoading" />
      <ul v-else>
        <SinglePostCard v-for="post in posts" :key="post.id" :post="post" />
      </ul>
    </div>
  </Layout>
</template>

<script setup>
import SinglePostCard from '../components/SinglePostCard.vue';
import Layout from '../components/Layout.vue';
import Loader from '../components/Loader.vue';
import { usePostsData } from '../composables/usePostData.js';
import { ref } from 'vue';

const { posts } = usePostsData();

const isLoading = ref(true);

setTimeout(() => {
  isLoading.value = false; 
}, 1000); 
</script>
