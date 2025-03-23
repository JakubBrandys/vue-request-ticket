import type { User } from '@/types/user';
import type { Ref } from 'vue';

export interface UseUsers {
  users: Ref<User[]>;
  isLoading: Ref<boolean>;
  errorMessage: Ref<string | null>;
  loadUsers: () => Promise<void>;
}

export interface UseError {
  errorMessage: Ref<string | null>;
  setError: (message: string) => void;
  clearError: () => void;
}
