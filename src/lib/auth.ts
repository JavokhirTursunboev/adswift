
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import prisma from "@/utils/connect";
import { compare } from 'bcrypt';
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

const GITHUB_ID = process.env.GITHUB_ID;
const GITHUB_SECRET = process.env.GITHUB_SECRET;
const GOOGLE_ID = process.env.GOOGLE_ID;
const GOOGLE_SECRET = process.env.GOOGLE_SECRET;

if (!GITHUB_ID || !GITHUB_SECRET || !GOOGLE_ID || !GOOGLE_SECRET) {
  throw new Error('Environment variables GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET must be set');
}
export const authOptions: NextAuthOptions ={
    adapter:PrismaAdapter(prisma),
    session:{
        strategy:'jwt'
    },
   pages:{
  signIn:'/signIn'
   },
    providers: [
        CredentialsProvider({

          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
         
          credentials: {
            email: { label: "Email", type: "Email", placeholder: "Email" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
                if(!credentials?.email || !credentials?.password){
                    return null
                }
            

                const existingUser = await prisma.user.findUnique({
                    where:{
                        email: credentials?.email
                    }
                })

                if(!existingUser){
                    return null
                }

                const passwordMatch = await compare(credentials.password, existingUser.password ) ;


                if(!passwordMatch){
                    return null
                }
                  if (!existingUser.id) {
        // Handle the case where id is null (optional)
        return null;
    }
                return {
                    id: `${existingUser.id}`,
                    username:existingUser.username as string,
                    email: existingUser.email
                };
          }
        }),
        GithubProvider({
            clientId: GITHUB_ID,
            clientSecret: GITHUB_SECRET,
            // ...
          }),
          GoogleProvider({
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            // ...
          }),
          
      ],
      callbacks:{
        async jwt({token, user}){
            if(user){
                return {
                    ...token,
                    username:user.username
                }
            }
            return token
        },
        async session({session,  token}){

            return{

                ...session,
                user:{
                    ...session.user,
                    username:token.username
                }
            } 
        }
      }
}