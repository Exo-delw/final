import apiClient from '@/lib/axios';

// 1. FIX: Update Type to match Laravel Resource
export interface Subscriber {
  id: number;
  email: string;
  // If your Resource returns 'subscribed_at', use that. 
  // If it returns 'created_at', use that. Check app/Http/Resources/SubscriberResource.php
  subscribed_at?: string; 
  created_at?: string; 
  human_date?: string; // Optional: If you included the "diffForHumans" in backend
}

// 2. NEW: Define the Paginated Response Structure
export interface PaginatedResponse<T> {
  data: T[];
  links: {
    first: string;
    last: string; 
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    total: number;
  };
}

export const subscriberService = {
  // Public: Subscribe
  subscribe: async (email: string) => {
    // Return the specific data wrapper
    const response = await apiClient.post<{ data: Subscriber, message: string }>('/api/v1/subscribe', { email });
    return response.data; 
  },

  // Admin: Get All (Paginated)
  getAll: async (page = 1) => {
    // FIX: Pass the page number query param
    const response = await apiClient.get<PaginatedResponse<Subscriber>>(`/api/v1/admin/subscribers?page=${page}`);
    return response.data; 
  }
};