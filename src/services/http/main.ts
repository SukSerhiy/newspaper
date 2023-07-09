import axios, { AxiosInstance } from 'axios';

const baseURL = import.meta.env.VITE_API_HOST;
const apiKey = import.meta.env.VITE_API_KEY;

// ==========================================:
const http: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

http.interceptors.request.use((config) => {
  config.params = {
    apiKey,
    ...config.params,
  };
  return config;
});

export { http };
