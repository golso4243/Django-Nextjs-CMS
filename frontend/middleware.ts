import type { NextRequest } from "next/server";

// Middleware is currently a no-op and simply passes all requests through.
// When authentication is implemented, this is a natural place to:
// - Protect routes like /dashboard by checking cookies or headers.
// - Redirect anonymous users to a login page.
export function middleware(_request: NextRequest) {
  return;
}

