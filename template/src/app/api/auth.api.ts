import { apiClient } from '@app/api/client.api';
import { useAuthStore } from '@app/store/auth.store';

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (err: any) => void;
}> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else if (token) prom.resolve(token);
  });
  failedQueue = [];
};

/**
 * Request a new access token
 */
export const refreshAccessToken = async (): Promise<string> => {
  const { refreshToken, setTokens, logout } = useAuthStore.getState();

  if (!refreshToken) {
    logout();
    throw new Error('No refresh token');
  }

  try {
    // TODO: implement token refresh logic here
    const response = await apiClient.post('/auth/refresh', { refreshToken });
    const { accessToken: newAccessToken } = response.data;

    setTokens({ accessToken: newAccessToken });
    return newAccessToken;
  } catch (err) {
    logout();
    throw err;
  }
};

/**
 * Interceptor helper for handling token refresh logic
 */
export const handleTokenError = async (error: any) => {
  const originalRequest = error.config;

  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      failedQueue.push({ resolve, reject });
    })
      .then((token) => {
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return apiClient(originalRequest);
      })
      .catch((err) => Promise.reject(err));
  }

  isRefreshing = true;

  try {
    const newToken = await refreshAccessToken();
    processQueue(null, newToken);

    originalRequest.headers.Authorization = `Bearer ${newToken}`;
    return apiClient(originalRequest);
  } catch (err) {
    processQueue(err, null);
    throw err;
  } finally {
    isRefreshing = false;
  }
};
