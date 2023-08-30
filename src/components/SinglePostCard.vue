<template>
  <Layout>
    <template #header>
      <Header />
    </template>

    <div class="container mx-auto">
      <div class="bg-white p-4 border-4 border-s-amber-400 shadow-lg m-10">
        <h2 class="text-lg font-semibold text-2xl">{{ post.title }}</h2>
        <p class="mt-2 text-xl">{{ post.body }}</p>
        <router-link :to="'/post/' + post.id" class="mt-4 block">
          <button :class="buttonClasses" @click="handleButtonClick">
            Read More
          </button>
        </router-link>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { defineProps } from 'vue';
import { usePostData } from '../composables/usePostData';
import { useButtonStyles } from '../composables/useButtonStyles';

const props = defineProps({
  post: Object,
  type: String,
});

const { post, comments, postImage } = usePostData(props.post.id);
const { buttonClasses } = useButtonStyles(props);

const handleButtonClick = () => {
  console.log('Button clicked');
};
</script>

<style scoped>
</style>
