import prisma from "@/utils/connect";
import React from "react";
import bcrypt from "bcrypt";
import { z } from "zod";

const isComplexPassword = (value: string): boolean => {
  // Check if password contains at least one uppercase letter, one lowercase letter, and one digit
  return /[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value);
};
const schema = z.object({
  username: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(6, { message: 'Last name must be more than 6 character and at least one uppercase letter, one lowercase letter, and one digit' }).refine(isComplexPassword),
  repeatPassword: z.string().min(6).refine(isComplexPassword)
})

export default function Register() {
   
    async function register(formData:FormData){
        'use server'
       
       const validatedData = schema.parse({

          username :formData.get('username') as string,
          email : formData.get('email') as string,
          password : formData.get('password') as string,
          repeatPassword : formData.get('repeatPassword') as string,
       })
        
        if(validatedData.password !== validatedData.repeatPassword){
          return 'Passwords do not natch'
        }
        // create new user 
        try {

          const userCheck = await prisma.user.findUnique({
            where:{
              username: validatedData.username
            }
          })
          if(userCheck){
            throw new Error("Username already exists");
          }
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(validatedData.password, salt)
            // create new user
            await prisma.user.create({
              data: {
                username: validatedData.username,
                email: validatedData.email,
                password : hashedPassword,
                
              },
            });
          
            // Redirect to homepage after successful registration
            
          } catch (error) {
            console.error('Error registering user:', error);
            // Handle error (e.g., display error message to the user)
          }
    }
  return <div className='flex items-center container mx-auto'>
    <div className=" w-[500px] p-[50px] flex flex-col text-center gap-[30px] rounded-md ">

    <form action={register} className="flex flex-col text-center gap-[30px]" > 
        <input type='text' name='username' placeholder='username'  className="px-[20px] py-[10px] border-b-2"/>
        <input type='email' name='email' placeholder='email'  className="px-[20px] py-[10px] border-b-2"/>
        <input type='password' name='password' placeholder='password'  className="px-[20px] py-[10px] border-b-2"/>
        <input type='password' name='repeatPassword' placeholder='repeat Password' className="px-[20px] py-[10px] border-b-2" />
        <button className="px-3 py-2 mt-3 bg-green-500 text-white rounded-lg" >Register </button>
    </form>
    </div>

  </div>;
}
