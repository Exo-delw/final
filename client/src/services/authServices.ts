import apiClient from '@/lib/axios';

export const authService = {
  login: async (credentials: {email: string, password: string}) => {
    const response = await apiClient.post('/api/v1/login', credentials);
    // Save token immediately
    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
    }
    return response.data;
  },

  logout: async () => {
    try {
      await apiClient.post('/api/v1/logout');
    } finally {
      localStorage.removeItem('token');
      window.location.href = '/login'; // Force redirect
    }
  },

  isAuthenticated: () => {
    return typeof window !== 'undefined' && !!localStorage.getItem('token');
  }
};