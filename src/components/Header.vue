<template>
  <header class="bg-yellow-500 p-4 text-2xl">
    <div class="container mx-auto flex items-center justify-between">
      <div>
        <router-link to="/Home" class="text-black font-semibold mr-4">Home</router-link>
        <router-link to="/posts" class="text-black font-semibold mr-4">Posts</router-link>
        <router-link to="/contact" class="text-black font-semibold">Contacts</router-link>
      </div>
      <span class="text-black font-semibold mx-4 text-3xl border-2 border-black px-4 py-2 rounded">BLOGGER</span>
      <div>
        <router-link to="/login" class="text-black font-semibold mr-4">Login</router-link>
        <router-link to="/register" class="text-black font-semibold">Register</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>
