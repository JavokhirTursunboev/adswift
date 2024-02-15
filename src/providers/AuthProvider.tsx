"use client";
import { SessionProvider } from "next-auth/react";
import { ReactElement } from "react";

export default function AuthProvider({ children }: { children: ReactElement }) {
  return <SessionProvider>{children}</SessionProvider>;
}
