import { ref } from 'vue';
import { fetchUsers } from '@/services/api';
import type { User } from '@/types/user';
import { useError } from './useError';
import type { UseUsers } from '@/types/composables.ts';

export function useUsers(): UseUsers {
  const users = ref<User[]>([]);
  const isLoading = ref(false);
  const { errorMessage, setError, clearError } = useError();

  const loadUsers = async () => {
    clearError();
    isLoading.value = true;

    try {
      users.value = await fetchUsers();
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Error while fetching users.');
    } finally {
      isLoading.value = false;
    }
  };

  return {
    users,
    isLoading,
    errorMessage,
    loadUsers,
  };
}
