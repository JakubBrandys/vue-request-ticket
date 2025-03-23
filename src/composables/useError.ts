import { ref } from 'vue';
import type { UseError } from '@/types/composables.ts';

const errorMessage = ref<string | null>(null);

export function useError(): UseError {
  const setError = (msg: string) => {
    errorMessage.value = msg;
  };

  const clearError = () => {
    errorMessage.value = null;
  };

  return {
    errorMessage,
    setError,
    clearError,
  };
}
