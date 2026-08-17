import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { ApiResponse } from '@kodx/types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1';

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Response interceptor for consistent error extraction
apiClient.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => response,
  (error: AxiosError<ApiResponse>) => {
    const errorData = error.response?.data;
    const errorMessage = errorData?.error?.message || error.message || 'Xatolik yuz berdi';
    return Promise.reject(new Error(errorMessage));
  }
);

export async function checkApiHealth() {
  const response = await apiClient.get<ApiResponse<{ status: string; version: string; database: string }>>('/health');
  return response.data;
}
