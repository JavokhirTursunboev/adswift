'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors },} = useForm();
  const [serverError, setServerError] = useState<string | null>(null); 

  const onSubmit = async (data:any) => {
    
   const signInData  = await signIn('credentials',{
    email: data.email,
    password:data.password,
    redirect:false
   })
    
   if(signInData?.error){
    console.log(signInData.error)
   }else{
    router.push('/')
   }
  }

  // Watch the password field to compare with repeatPassword

  return (
    <div className='flex items-center container mx-auto mt-8'>
      <div className="w-[500px] p-[50px] flex flex-col text-center gap-[30px] rounded-md mx-auto border-2  extrashadow ">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-center gap-[30px]">
         

          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format' }
            })}
            type='email' name='email' placeholder='Email' className="px-[20px] py-[10px] border-b-2  outline-none focus:border-b-black"
          />
        {errors.email && <span className="text-red-500">{(errors.email.message as string)}</span>}

          <input
            {...register('password', {
              required: 'Password is required',
             
            })}
            type='password' name='password' placeholder='Password' className="px-[20px] py-[10px] border-b-2  outline-none focus:border-b-black"
          />
          {errors.password && <span className="text-red-500">{(errors.password.message as string)}</span>}


           {serverError && <span className="text-red-500">{serverError}</span>}

          <button className="px-3 py-2 mt-3 bg-green-500 text-white rounded-lg">SignUp</button>
        </form>
      </div>
    </div>
  );
}
