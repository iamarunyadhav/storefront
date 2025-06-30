import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api', // Adjust the base URL as needed
  withCredentials: true,
});
