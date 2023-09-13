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

</script>
