<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <slot name="header">
        <Header />
      </slot>
    </header>

    <main class="flex-grow flex items-center justify-center">
      <slot></slot>
    </main>

    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        <p>&copy; 2023 All rights reserved</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>
