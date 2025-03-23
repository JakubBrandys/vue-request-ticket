<template>
  <div class="app-container">
    <AppHeader />
    <main>
      <ErrorToast />
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import ErrorToast from '@/components/ErrorToast.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
}

main {
  padding: 2rem;
  margin-top: 60px;
  flex: 1;
}
</style>
