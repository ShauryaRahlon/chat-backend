"use client";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Component() {
  const { data: session, status } = useSession();
  if (session) {
    return (
      <div>
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      <p>Not signed in</p>
      <button
        onClick={() => signIn()}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Sign in
      </button>
    </div>
  );
}
