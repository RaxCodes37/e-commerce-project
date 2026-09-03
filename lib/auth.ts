import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "../app/index";
import { nextCookies } from "better-auth/next-js";
import { headers } from "next/headers";
import "dotenv/config"

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	plugins: [nextCookies()],
	pages: {
		signIn: "/sign-in",
	},
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,		
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
	},
});

export const getSession = async () => auth.api.getSession({	
	headers: await headers(),
})