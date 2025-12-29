import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true, 
});

// Interceptor: Attach Token if it exists
apiClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return response; // If success, just return data
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      
      if (typeof window !== 'undefined' && !window.location.pathname.startsWith('/login')) {
        
        console.warn('Session expired. Logging out...');
        
       
        localStorage.removeItem('token');
        window.location.href = '/login?expired=true';
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;