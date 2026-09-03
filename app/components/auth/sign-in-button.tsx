"use client";

import { FaGithub } from "react-icons/fa"
import { authClient } from "@/lib/client"
 
export default function SignInButton() {
	const signInWithGitHub = async () => await authClient.signIn.social({
		callbackURL: "/",
		provider: "github",
	})

	return (
		<div>
			<button onClick={signInWithGitHub}>
				<FaGithub/>
				Sign In with GitHub
			</button>
		</div>
	)
}