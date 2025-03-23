import { ref } from 'vue';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ErrorToast from '@/components/ErrorToast.vue';
import { useError } from '@/composables/useError.ts';


vi.mock('@/composables/useError', () => ({
  useError: vi.fn(),
}));

describe('ErrorToast.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('does not render when errorMessage is null', () => {
    vi.mocked(useError).mockReturnValue({
      errorMessage: ref(null),
      setError: vi.fn(),
      clearError: vi.fn(),
    });

    const wrapper = mount(ErrorToast);
    expect(wrapper.find('.error-toast').exists()).toBe(false);
  });

  it('renders error message when errorMessage is set', () => {
    const mockErrorMessage = 'Network error occurred';
    vi.mocked(useError).mockReturnValue({
      errorMessage: ref(mockErrorMessage),
      setError: vi.fn(),
      clearError: vi.fn(),
    });

    const wrapper = mount(ErrorToast);
    const errorToast = wrapper.find('.error-toast');

    expect(errorToast.exists()).toBe(true);
    expect(errorToast.find('span').text()).toBe(mockErrorMessage);
  });

  it('calls clearError when the close button is clicked', async () => {
    const clearErrorMock = vi.fn();
    const setErrorMock = vi.fn();
    vi.mocked(useError).mockReturnValue({
      errorMessage: ref('Network error occurred'),
      setError: setErrorMock,
      clearError: clearErrorMock,
    });

    const wrapper = mount(ErrorToast);
    const button = wrapper.find('button');

    expect(button.exists()).toBe(true);
    await button.trigger('click');
    expect(clearErrorMock).toHaveBeenCalled();
  });
});
