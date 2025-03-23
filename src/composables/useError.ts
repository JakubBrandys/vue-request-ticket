import { ref } from 'vue';

const errorMessage = ref<string | null>(null);

export function useError() {
    const setError = (msg: string) => {
        errorMessage.value = msg;
    };

    const clearError = () => {
        errorMessage.value = null;
    };

    return {
        errorMessage,
        setError,
        clearError
    };
}