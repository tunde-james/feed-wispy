"use client";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

function AuthProvider({ children }: Props) {
  return <SessionProvider>AuthProvider</SessionProvider>;
}

export default AuthProvider;
