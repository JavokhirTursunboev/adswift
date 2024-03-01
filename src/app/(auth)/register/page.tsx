'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterServer } from "@/actions"; // Assuming this import is correctly defined
import { redirect } from "next/navigation";

export default function Register() {
  const { register, handleSubmit, formState: { errors }, watch} = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null); 

  const onSubmit = async (data:any) => {
    setIsSubmitting(true);
    try {
     const response = await RegisterServer(data);
     if(response.error){
      setServerError(response.error)
     }else{
      setIsSubmitting(false);
     }
      console.log('Registration successful');
      setIsSubmitting(false);
      redirect('/')
      // Redirect to homepage or show success message
    } catch (error) {
      console.error('Error registering user:', error);
      setIsSubmitting(false);
      // Handle error (e.g., display error message to the user)
    }
  }

  // Watch the password field to compare with repeatPassword
  const password = watch("password");

  return (
    <div className='flex items-center container mx-auto mt-8'>
      <div className="w-[500px] p-[50px] flex flex-col text-center gap-[30px] rounded-md mx-auto border-2  extrashadow ">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-center gap-[30px]">
          <input
            {...register('username', {
              required: 'Username is required',
              minLength: { value: 3, message: 'Username must be at least 3 characters' },
              maxLength: { value: 50, message: 'Username cannot exceed 50 characters' },
            })}
            type='text' name='username' placeholder='Username' className="px-[20px] py-[10px] border-b-2 outline-none focus:border-b-black "
          />
          {errors.username && <span className="text-red-500">{(errors.username.message as string)}</span>}

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
              minLength: { value: 6, message: 'Password must be at least 6 characters' }
            })}
            type='password' name='password' placeholder='Password' className="px-[20px] py-[10px] border-b-2  outline-none focus:border-b-black"
          />
          {errors.password && <span className="text-red-500">{(errors.password.message as string)}</span>}

          <input
            {...register('repeatPassword', {
              required: 'Repeat password is required',
              validate: value => value === password || 'Passwords do not match'
            })}
            type='password' name='repeatPassword' placeholder='Repeat Password' className="px-[20px] py-[10px] border-b-2  outline-none focus:border-b-black"
          />
          {errors.repeatPassword && <span className="text-red-500">{(errors.repeatPassword.message as string)}</span>}

           {serverError && <span className="text-red-500">{serverError}</span>}

          <button className="px-3 py-2 mt-3 bg-green-500 text-white rounded-lg">{isSubmitting ? 'Submitting...' : 'Register'}</button>
        </form>
      </div>
    </div>
  );
}
