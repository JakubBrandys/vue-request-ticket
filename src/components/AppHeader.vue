<template>
  <nav>
    <router-link to="/users">Users</router-link> |
    <router-link to="/posts">Posts</router-link>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: #f8f8f8;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  margin: 0 1rem;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}

.router-link-active {
  font-weight: bold;
  color: #42b983;
}
</style>
