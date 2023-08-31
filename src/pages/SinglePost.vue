<template>
  <Layout>
    <template #header>
    </template>

    <div class="container mx-auto p-4">
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
import { useRoute } from 'vue-router';
import { usePostData } from '../composables/usePostData';
import { useToast } from 'vue-toastification'; // Импортируйте useToast

const { params } = useRoute();
const { post, comments, postImage } = usePostData(params.id);
const toast = useToast();

showInfoToast('Loading content', 2000);
setTimeout(() => {
  showSuccessToast('Content loaded OK', 1000);
}, 2000);

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

<style scoped>
</style>
