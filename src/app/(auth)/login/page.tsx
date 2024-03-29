'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import LoginWith from './../../../components/Register/SocialLogin/LoginWith';

export default function Register() {
  const router = useRouter()
   
  const { register, handleSubmit, formState: { errors },} = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure(); 
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data:any) => {
    setIsLoading(true);
   const signInData  = await signIn('credentials',{
    email: data.email,
    password:data.password,
    redirect:false
   })

   setIsLoading(false);

   if(signInData?.error){
    onOpen()
   }else{
     router.refresh()
     router.push('/')
   }
  }

  // Watch the password field to compare with repeatPassword

  return (
    <div className='flex items-center container mx-auto mt-8'>
      <div className=" md:w-[500px] p-[50px] flex flex-col text-center gap-[30px] rounded-md mx-auto border-2  extrashadow ">
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



          {isLoading ? (
            <Button color="primary" isLoading className="px-3 py-2 mt-3 bg-green-500 text-white rounded-lg" >
              Loading
            </Button>
          ) : (
            <button type="submit" className="px-3 py-2 mt-3 bg-green-500 text-white rounded-lg">Login</button>
          )}
        </form>
        <div> 
          <p> Don &apos; t have an account? <Link href='/register' className='text-blue-500 font-bold'> SignUp </Link> </p>

        </div>
        <div>
          <LoginWith />
        </div>
      </div>
      {/* error */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Error</ModalHeader>
          <ModalBody>
            <p>OOPs! Invalid email or password</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onClose}>OK</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    
    </div>
  );
}
