import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth-service";

const config = {
	providers: [
		Credentials({
			async authorize(credentials) {
				const res = await login(credentials);
				const data = await res.json();
				console.log(data);

				if (!res.ok) return null;

				const payload = {
					user: {...data},
					accessToken: data.token.split(" ")[1]
				}
				
				delete payload.user.token

				return payload;
			},
		}),
	],
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			console.log("AUTH",auth)
			return true;
		},
	},
	pages: {
		signIn: "/login",
	},
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
