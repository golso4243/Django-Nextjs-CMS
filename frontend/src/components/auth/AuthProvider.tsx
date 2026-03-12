"use client";

// Simple, non-functional auth context used as a placeholder.
// The app renders as an anonymous user; login/logout can be wired up later.
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useMemo,
} from "react";
import type { AuthStatus, AuthUser } from "@/lib/auth";

interface AuthContextValue {
  user: AuthUser | null;
  status: AuthStatus;
  login: (_credentials: unknown) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user] = useState<AuthUser | null>(null);
  const [status] = useState<AuthStatus>("anonymous");

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      status,
      // No-op placeholders; real implementations can be wired to /api/auth/*
      async login() {
        throw new Error("Auth login is not implemented yet");
      },
      async logout() {
        // Intentionally a no-op for now.
      },
    }),
    [user, status]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}

