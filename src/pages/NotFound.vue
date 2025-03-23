<template>
  <div>
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
div {
  text-align: center;
  padding: 4rem 2rem 2rem;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
