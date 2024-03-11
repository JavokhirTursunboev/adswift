import PostCard from "@/components/Posts/Card";
import Link from "next/link";
import { IoMdAddCircleOutline } from "react-icons/io";

type PostType = {
  id: string;
  createdAt: Date;
  title: string;
  desc: string;
  img?: string;
  views: number;
  slug: string;
  userEmail: string;
};

async function getData() {
  const res = await fetch(`http://localhost:3000/api/posts`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Posts() {
  const data = await getData();
  return (
    <div className="px-[20px] md:px-[30px]  pt-[60px] container mx-auto ">
      <div className="flex-5 ">
      <div className='flex items-center justify-between' >

        <h1 className=" text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-center font-bold ">
          Recently Posts
        </h1>
        <Link href='/write' className=' flex items-center gap-2 border-none bg-green-600 rounded-md px-5  py-2 text-white hover:text-blue-800  '><IoMdAddCircleOutline className='text-[22px] md:text-[18px]' /> <span className='hidden md:block' >Add Post </span> </Link>
      </div>


        {/* posts */}
        <div className="my-[50px] mx-0">
          {/* single card */}
          {data.reverse().map((item: PostType) => (
            <PostCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
