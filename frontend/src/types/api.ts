import type { BlogPost } from "./cms";

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export type BlogPostListResponse = PaginatedResponse<BlogPost>;

