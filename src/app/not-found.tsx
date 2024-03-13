'use client'
import { useRouter } from 'next/navigation'
import { IoHomeOutline } from "react-icons/io5";

export default function NotFound() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/');
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='font-bold text-[52px] text-red-500 '>404</h2>
      <h2 className='font-bold text-[32px] text-red-500 '>Not Found</h2>
      
      <button onClick={handleRedirect} className='text-blue-500 underline flex items-center justify-center gap-2 text-[18px] '>Return Home <IoHomeOutline />
</button>
    </div>
  );
}