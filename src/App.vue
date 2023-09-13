<template>
  <div id="app">
    <component :is="currentLayout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    currentLayout() {
      // Получаем макет из метаданных текущего маршрута
      return this.$route.meta.layout || "default"; // "default" - ваш макет по умолчанию
    },
  },
};
</script>
