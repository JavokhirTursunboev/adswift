import { Comments } from "@/components/Comment/Comment";
import Image from "next/image";
import LikeButton from "./../../../components/GlobalComponents/likeButton/LikeButton";
import { FaRegComment } from "react-icons/fa";
import PopOver from "@/components/Posts/PopOver/PopOver";
import Link from "next/link";
import PopOverEdit from "./../../../components/Posts/PopOver/popOverEdit";
import moment from 'moment'; // Import moment.js library
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth"


interface singlepageType {
  params: {
    slug: string;
  };
}

const getData =async (slug:string) => {
  const res = await fetch(
    `http://localhost:3000/api/posts/${slug}`,{
      cache:'no-store'
    }
  )
  if(!res.ok){
    throw new Error('Failed')
  }
  return res.json()
}

export default async function SinglePage({params}: singlepageType) {
  const {slug} = params
  const data = await getData(slug)
  
  const signupuser = await getServerSession(authOptions)
  

  return (
    <div className=" px-[20px] md:px-[30px] xxl:px-0 pb-[50px] lg:py-[80px]">
      <div className="container mx-auto">
        {/* header and image */}
        <div
          className="flex flex-col gap-9 lg:flex-row items-center 
         justify-center pt-[50px] mb-[70px] "
        >
          <div className="flex flex-col  md:gap-[30px]  w-full">
            <h1
              className=" text-black text-[32px] md:text-[54px] lg:text-[65px] md:leading-[50px]
             lg:leading-[60px]  font-bold mb-[20px] md:mb-[50px]"
            >
              {data.title}
            </h1>
            {/* user */}
            <div className="flex gap-3">
              <Image
                src={data?.user?.image || `/defaults/defaultUser.png`}
                height={40}
                width={40}
                alt="user"
                className="rounded-full  "
              />
              <div>
                <p className=" text-black font-[500] ">{data?.user.username || data?.user.name }</p>
                <p className=" text-zinc-400 text-[12px]">{moment(data.createdAt).subtract(10, 'days').calendar()}</p>
              </div>
            </div>

            <div className="flex items-center justify-between ">
              {/* ================= share side ===================== */}
              <div className="flex items-center justify-between  mt-[20px] border-y-2 w-full py-5">
                <div className="flex gap-5 ">
                  <LikeButton col="black" />
                  <Link href="#comments">
                    <FaRegComment className=" text-black " />
                  </Link>
                  <PopOver color="black" />
                </div>

                <div>
                {data?.user.username === signupuser?.user?.username && <PopOverEdit slug={data.slug}  />}
                </div>
              </div>
            </div>
          </div>

          {/* ======== main images ========== */}
          <Image
           src={data?.img || "/images/default.png"}
            width={600}
            height={600}
            alt="idImage"
            priority
            className="w-auto h-auto  rounded-md"
          />
        </div>

        {/*================= text============== */}
        <div className="mb-[40px] lg:mb-[80px]  ">
          <div
            className=" text-black text-[18px] align-center"
            dangerouslySetInnerHTML={{ __html: data?.desc || "" }}
          />
        </div>

        {/* ============== comments ======= */}
        <div id="comments">
          <Comments postSlug={ data.slug } />
        </div>
      </div>
    </div>
  );
}
