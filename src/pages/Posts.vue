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
import SinglePostCard from '../components/SinglePostCard.vue';
import Layout from '../components/Layout.vue';
import { usePostsData } from '../composables/usePostData.js';

const { posts } = usePostsData();
</script>
