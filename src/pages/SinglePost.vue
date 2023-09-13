<template>
  <Layout>
    <template #header>
    </template>

    <Loader v-if="isLoading" />

    <div v-else class="container mx-auto p-4">
      <div class="bg-white rounded-lg p-4 shadow-md">
        <h2 class="font-semibold text-3xl">{{ post.title }}</h2>
        <p class="mt-2 text-gray-600 text-2xl">{{ post.body }}</p>
        <img :src="postImage" alt="Post Image" class="mt-4">
      </div>
      <div class="space-y-4">
        <Comment v-for="(comment, index) in comments" :key="comment.id" :comment="comment" :even="index % 2 === 0" />
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '../components/Layout.vue';
import Comment from '../components/Comment.vue';
import Loader from '../components/Loader.vue';
import { useRoute } from 'vue-router';
import { usePostData } from '../composables/usePostData';
import { ref } from 'vue';

const { params } = useRoute();
const { post, comments, postImage } = usePostData(params.id);

const isLoading = ref(true);

setTimeout(() => {
  isLoading.value = false; 
}, 1000); 
</script>

<style scoped>
</style>
