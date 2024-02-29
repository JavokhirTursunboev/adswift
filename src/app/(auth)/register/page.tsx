import prisma from "@/utils/connect";
import React from "react";
import bcrypt from "bcrypt";

export default function Register() {
   
    async function register(formData:FormData){
        'use server'
        const username = formData.get('username') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const repeatPassword = formData.get('repeatPassword') as string
        
        if(password !== repeatPassword){
          return 'Passwords are not natch'
        }
        // create new user 
        try {

          const userCheck = await prisma.user.findUnique({
            where:{
              username
            }
          })
          if(userCheck){
            return 'Username already exisists'
          }
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            // create new user
            await prisma.user.create({
              data: {
                username,
                email,
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
