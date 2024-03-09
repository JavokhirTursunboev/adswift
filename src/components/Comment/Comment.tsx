'use client'
import Image from "next/image";
import Link from "next/link";
import { useSession } from 'next-auth/react';
import { FaSignInAlt } from "react-icons/fa";
import useSWR from 'swr'
import moment from 'moment'; // Import moment.js library
import { IoSendOutline } from "react-icons/io5";


const fetcher = async(url: string)=>{
  const res = await fetch(url)
  const data = await res.json()

  if(!res.ok){
    const error = new Error(data.message)
    throw error
  }
  return data
}
export const Comments = ({postSlug}:{ postSlug : string }) => {
  const status = useSession()
  
  const {data, isLoading} = useSWR(`/api/comments?postSlug=${postSlug}`, fetcher )

  
  return (
    <div className=" container mb-[50px]">
      <h1 className="text-black mb-[30px] text-[32px] md:text-[50px] lg:text-[55px] font-semibold ">
        Comment
      </h1>
      {status.status === "authenticated" ? (
        <div className="flex flex-col md:flex-row items-end justify-between gap-[20px] md:gap-[30px] ">
          <textarea placeholder="write a comment..." className="w-full p-[20px]" id="comment" />
          <button
            type="submit"
            className=" hidden md:block  py-[16px] px-[20px] bg-teal-900 text-white border-none rounded-lg cursor-pointer  "
          >
            Send
          </button>
          <button className='block md:hidden text-[25px]' ><IoSendOutline /> </button>
        </div>
      ) : (
        <Link href="/login" className='text-red-600 text-[20px] md:text-[28px] underline flex items-center gap-5 '> <FaSignInAlt /> Login to write a comment</Link>
      )}

      {isLoading ? (
        'Loading...'
      ) : (
        data.map((item:{
          id:string,
          name:string,
          createdAt:Date,
          desc:string
        }) => (
          <div className="mt-[50px]" key={item.id}>
            <div className="mb-[50px]">
              {/* ============= User of comments ================ */}
              <div className="flex items-center gap-3 mb-[20px] ">
                <Image
                  src="/AboutComment/testimonial-1.png"
                  height={40}
                  width={40}
                  alt="user"
                  className="rounded-full "
                />
                <div>
                  <p className=" text-black  font-bold ">{item.user.username}</p>
                  <p className="text-zinc-600 text-[11px]">{moment(item.createdAt).startOf('hour').fromNow()}</p>
                </div>
              </div>

              {/* ======= DESCRIPTION TEXT ========= */}
              <p className="font-[300] text-sm md:text-base  text-black">
               {item.desc}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
