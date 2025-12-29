import apiClient from '@/lib/axios';

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactService = {
  sendMessage: async (data: ContactPayload) => {
    // Calls Laravel: POST /api/v1/contact
    return await apiClient.post('/api/v1/contact', data);
  }
};