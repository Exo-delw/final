import apiClient from '@/lib/axios';
import { BlogPost, ApiResponse } from '@/types';

export const blogService = {
  // Public: Get latest posts
  getAll: async (limit = 6) => {
    // Query param 'limit' will be handled by Laravel later
    const response = await apiClient.get<ApiResponse<BlogPost[]>>(`/api/v1/posts?limit=${limit}`);
    return response.data;
  },

  // Public: Get single post
  getBySlug: async (slug: string) => {
    const response = await apiClient.get<ApiResponse<BlogPost>>(`/api/v1/posts/${slug}`);
    return response.data;
  },

  // Admin: Create Post
  create: async (formData: FormData) => {
    // FormData is needed for file uploads (thumbnails)
    const response = await apiClient.post('/api/v1/admin/posts', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  }
};