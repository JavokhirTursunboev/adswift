
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import prisma from "@/utils/connect";
import { compare } from 'bcrypt';


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
                    username:existingUser.username,
                    email: existingUser.email
                };
          }
        })
      ]
}