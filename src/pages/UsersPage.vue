<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }} – {{ user.email }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchUsers } from '@/services/api';
import { useError } from '@/composables/useError';
import type { User } from '@/types/user';

const users = ref<User[]>([]);
const { setError, clearError } = useError();

const loadUsers = async () => {
  try {
    clearError();
    users.value = await fetchUsers();
  } catch (error: unknown) {
    if (error instanceof Error) {
      setError(error.message);
    } else {
      setError('Error while fetching users.');
    }
  }
};

onMounted(() => {
  loadUsers();
});
</script>
