"use client";
import { SessionProvider } from "next-auth/react";
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode; //children is a prop that can be any React node, such as a component or an element
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
