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

				// Backend den gelen data object i daha anlasilir hale geitirildi
				const payload = {
					user: {...data},
					accessToken: data.token.split(" ")[1]
				}
				delete payload.user.token
				console.log(payload)
				return payload;
			},
		}),
	],
	callbacks: {
		// middleware in kapsama alanina giren sayfalara yapilan isteklerden hemen once calisir
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isOnLoginPage = nextUrl.pathname.startsWith("/login")
			const isOnDashboardPage = nextUrl.pathname.startsWith("/dashboard")

			console.log(`isLoggedIn:`, isLoggedIn)
			console.log(`isOnLoginPage:`, isOnLoginPage)

			if(isLoggedIn){

				if(isOnLoginPage){
					return Response.redirect(new URL('/dashboard', nextUrl))
				}
			}
			else if(isOnDashboardPage){
				return false
			}

			console.log("AUTH",auth)
			//console.log(auth?.user ? "Login olmus" : "login olmamis")
			return true;
		},

		//JWT datasina ihtiyac duyan her route icin bu callback cagrilir
		async jwt({token, user}){
			console.log("TOKEN:", token)
			console.log("USER:", user)
			return {...user, ...token}
		},
		//Session datasina ihtiyac duyan her route icin bu callback cagrilir
		async session({session, token}){
			console.log("SESSION:", session)
			console.log("TOKEN:", token);

			session.accessToken = token.accessToken;
			session.user = token.user;
			return session;
		}
	},
	pages: {
		signIn: "/login",
	},
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
