export interface BlogSlugParams {
  /**
   * In Next.js 16+, route params are provided as a Promise in server components.
   * We model that here so page components can `await params` before use.
   */
  params: Promise<{
    slug: string;
  }>;
}

