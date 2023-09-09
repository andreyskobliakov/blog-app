<template>
  <Layout>
    <div class="container mx-auto">
      <Loader v-if="isLoading" />
      <ul v-else>
        <SinglePostCard v-for="post in posts" :key="post.id" :post="post" />
      </ul>
      <Pagination :page="currentPage" :totalPages="totalPages" @page-change="changePage" />
    </div>
  </Layout>
</template>

<script setup>
import { ref } from 'vue';
import SinglePostCard from '../components/SinglePostCard.vue';
import Layout from '../components/Layout.vue';
import Loader from '../components/Loader.vue';
import Pagination from '../components/Pagination.vue';
import { usePostsData } from '../composables/usePostData.js';

const { posts, totalPages, currentPage, changePage } = usePostsData();
const isLoading = ref(true);

setTimeout(() => {
  isLoading.value = false;
}, 1000);
</script>
