<template>
  <div>
    <h1>Users</h1>

    <div v-if="isLoading">Loading...</div>

    <div v-else-if="errorMessage">
      <p>{{ errorMessage }}</p>
      <button @click="loadUsers">Retry</button>
    </div>

    <ul v-else-if="users.length > 0">
      <li v-for="user in users" :key="user.id">
        {{ user.name }} – {{ user.email }}
      </li>
    </ul>

    <div v-else>No users found.</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useUsers } from '@/composables/useUsers';

const { users, isLoading, errorMessage, loadUsers } = useUsers();
onMounted(loadUsers);
</script>

<style scoped>
div {
  padding-top: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

button {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style>
