"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/client";
import { signOutAction } from "@/app/api/auth";

export default function SignOutButton() {
  const router = useRouter();

  const signout = async () =>
    await signOutAction()

  return <button onClick={signout}>Sign-Out</button>;
}
