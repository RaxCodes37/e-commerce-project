"use client";

import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/client";

export default function SignInButton() {
  const signInWithGitHub = async () =>
    await authClient.signIn.social({
      callbackURL: "/",
      provider: "github",
    });

  return (
    <div>
      <button
        onClick={signInWithGitHub}
        className="border-2 border-[#ddd] bg-[#e7e7e7] duration-400 hover:bg-white rounded-md w-full flex justify-center items-center gap-2"
      >
        <FaGithub />
        Sign In with GitHub
      </button>
    </div>
  );
}
