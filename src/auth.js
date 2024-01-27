import NextAuth from "next-auth"
import { login } from "./services/auth-service";
import credentials from "next-auth/providers/credentials";


const config={
    providers:[
        credentials({
            //formdaki kullanici adi sifre buraya gelecek
            async authorize(credentials){
                const res =await login(credentials);
                const data=await res.json();

                console.log(data)

                if(!res.ok) return null;
                return data ?? null;

            }
        })
    ],
    callbacks:{
        authorized({auth,request:{nextUrl}}){
            return true;
        }
    },
    pages:{
        signIn:"/login"
    }

}
export const{handlers,auth,signIn,signOut}=NextAuth(config);