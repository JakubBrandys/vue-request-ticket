<template>
  <div v-if="errorMessage" class="error-toast">
    <span>{{ errorMessage }}</span>
    <button @click="clearError">x</button>
  </div>
</template>

<script setup lang="ts">
import { useError } from '@/composables/useError';

const { errorMessage, clearError } = useError();
</script>

<style scoped>
.error-toast {
  background: #ffe0e0;
  color: #a00;
  padding: 1rem;
  border: 1px solid red;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 240px;
  z-index: 1000;
}

.error-toast button {
  background: none;
  border: none;
  color: #a00;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
