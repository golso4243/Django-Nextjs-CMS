// Core CMS content types shared between the Django API and Next.js frontend.
export interface Page {
  id: number;
  title: string;
  slug: string;
  body: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image_url: string | null;
  created_at: string;
  updated_at: string;
}

// Future extensions: these types are not yet backed by Django models
// or API endpoints, but they are defined here so the blog can easily grow
// to support multiple authors and tags later.
export interface Author {
  id: number;
  name: string;
  bio?: string | null;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

