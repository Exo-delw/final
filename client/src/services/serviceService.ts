import apiClient from '@/lib/axios';
import { ServiceItem, ApiResponse } from '@/types';

export const serviceService = {
  // Public: List all services
  getAll: async () => {
    const response = await apiClient.get<ApiResponse<ServiceItem[]>>('/api/v1/services');
    return response.data;
  },

  // Public: Get details
  getBySlug: async (slug: string) => {
    const response = await apiClient.get<ApiResponse<ServiceItem>>(`/api/v1/services/${slug}`);
    return response.data;
  },

  // Admin: Create (Needs FormData)
  create: async (formData: FormData) => {
    const response = await apiClient.post('/api/v1/admin/services', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }, // Crucial for files
    });
    return response.data;
  }

};