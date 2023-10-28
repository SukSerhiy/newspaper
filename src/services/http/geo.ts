import axios, { AxiosInstance } from 'axios';

const baseURL = import.meta.env.VITE_GEOAPIFY_HOST;
const apiKey = import.meta.env.VITE_GEOAPIFY_API_KEY;

// ==========================================:
const geoHttp: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

geoHttp.interceptors.request.use((config) => {
  config.params = {
    apiKey,
  };
  return config;
});

export { geoHttp };
