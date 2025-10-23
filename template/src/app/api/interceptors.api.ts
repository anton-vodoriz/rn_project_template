import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { apiClient } from '@app/api/client.api';
import { useAuthStore } from '@app/store/auth.store';
import { handleTokenError } from '@app/api/auth.api';

/**
 * Attach request interceptors
 */
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  async (error: AxiosError) => {
    // This handles request setup errors (not server responses)
    console.error('[Axios Request Error]', error.message);
    return Promise.reject(error);
  },
);

/**
 * Attach response interceptors
 */
apiClient.interceptors.response.use(
  async (response: AxiosResponse) => {
    // 🧠 Optionally transform data before returning
    // Example: return response.data if you always wrap responses
    return response;
  },
  async (error: AxiosError) => {
    const status = error.response?.status;
    if (status === 401) {
      return handleTokenError(error);
    }

    console.error('[Axios Response Error]', status, error.message);
    return Promise.reject(error);
  },
);
