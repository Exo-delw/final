import apiClient from '@/lib/axios';
import { ContactPayload, Inquiry, ApiResponse } from '@/types';


export const contactService = {
  sendMessage: async (data: ContactPayload) => {
    // POST to Laravel
    const response = await apiClient.post('/api/v1/contact', data);
    return response.data;
  },

  getAll: async (page = 1) => {
    const response = await apiClient.get<ApiResponse<Inquiry[]>>(`/api/v1/admin/inquiries?page=${page}`);
    return response.data;
  }
};