"use server";

import prisma from "@/utils/connect";
import { redirect } from "next/navigation";
import bcrypt from 'bcryptjs'


export default async function editServer(slug: string, title: string, desc: string) {
  await prisma.post.update({
    where: { slug },
    data: { title, desc },
  });
  redirect(`/posts/${slug}`);
}


export async function deleteServer(slug:string){
  await prisma.post.delete({
    where:{slug}
  })
  redirect('/posts')
}


// ============ sign up =============
export async function RegisterServer(data:{
  username:string,
  password:string,
  email:string
}) {
  try {

    const userCheckByUsername = await prisma.user.findUnique({
      where: { username: data.username }
    });

    const userCheckByEmail = await prisma.user.findUnique({
      where: { email: data.email }
    });

    if(userCheckByUsername ){
      return{error: "Username  already exists"}
    }
    if(userCheckByEmail){
      return {error: 'Email already exists'}
    }

      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(data.password, salt)
      // create new user
      await prisma.user.create({
        data: {
          username: data.username,
          email: data.email,
          password : hashedPassword,
          
        },
      });
    
      // Redirect to homepage after successful registration
      
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error (e.g., display error message to the user)
    }
   redirect('/')
}

// Login

export const  LoginServer = async (credentials:{
  email:string,
  password:string
})=>{
  try {
    const findUser= await prisma.user.findFirst({
      where: {email: credentials.email}
    })
    if(!findUser){
      throw new Error('wrong credentials')
    }
    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      findUser.password
    )
    if(!isPasswordCorrect){
      throw new Error('Wrong credentials')
    }
  return findUser
    } catch (error) {
      console.log(error)
  }
}
