// Standard API Response wrapper from Laravel
export interface ApiResponse<T> {
  data: T;
  message?: string;
  meta?: {
    current_page: number;
    last_page: number;
    total: number;
  };
}

// Blog Post Structure
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string; 
  content: string;
  thumbnail: string | null;
  gallery: string[]; 
  category: string; 
  author: string;   
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
}

// Service Structure
export interface ServiceItem {
  id: number;
  title: string;
  slug: string;
  icon: string | null;
  short_description: string;
  content?: string;
  gallery: string[]; 
}

// Contact Form Payload
export interface ContactPayload {
  fullname: string; 
  email: string;
  phone_number: string; 
  subject: string;
  message: string;
}

export interface Inquiry extends ContactPayload {
  id: number;
  is_read: boolean;
  created_at: string;
}