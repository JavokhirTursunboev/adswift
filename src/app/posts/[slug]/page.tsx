import { Comments } from "@/components/Comment/Comment";
import Image from "next/image";
import LikeButton from "./../../../components/GlobalComponents/likeButton/LikeButton";
import { FaRegComment } from "react-icons/fa";
import PopOver from "@/components/Posts/PopOver/PopOver";
import Link from "next/link";
import prisma from "@/utils/connect";
import PopOverEdit from "./../../../components/Posts/PopOver/popOverEdit";
import Loading from "@/app/loading";
import moment from 'moment'; // Import moment.js library
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth"


interface singlepageType {
  params: {
    slug: string;
  };
}

export default async function SinglePage(props: singlepageType) {
  const signupuser = await getServerSession(authOptions)
  const findUser = await prisma.post.findUnique({
    where: {
      slug: props.params.slug,
    },
  });
if(!findUser){
  return <Loading />
}

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
              {findUser?.title}
            </h1>
            {/* user */}
            <div className="flex gap-5">
              <Image
                src="/AboutComment/testimonial-1.png"
                height={50}
                width={50}
                alt="user"
                className="rounded-full "
              />
              <div>
                <p className=" text-black font-[500] ">{findUser?.postUsername}</p>
                <p className=" text-zinc-400 text-[12px]">{moment(findUser.createdAt).subtract(10, 'days').calendar()}</p>
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
                {findUser?.postUsername === signupuser?.user?.username && <PopOverEdit slug={findUser.slug}  />}
                </div>
              </div>
            </div>
          </div>

          {/* ======== main images ========== */}
          <Image
            src="/images/cactus.jpg"
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
            dangerouslySetInnerHTML={{ __html: findUser?.desc || "" }}
          />
        </div>

        {/* ============== comments ======= */}
        <div id="comments">
          <Comments postSlug={ findUser.slug } />
        </div>
      </div>
    </div>
  );
}
