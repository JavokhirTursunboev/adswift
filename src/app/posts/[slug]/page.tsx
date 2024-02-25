import { Comments } from "@/components/Comment/Comment";
import Image from "next/image";
import LikeButton from "./../../../components/GlobalComponents/likeButton/LikeButton";
import { FaRegComment } from "react-icons/fa";
import PopOver from "@/components/Posts/PopOver/PopOver";
import Link from "next/link";
import prisma from "@/utils/connect";
interface singlepageType {
  params: {
    slug: string;
  };
}
export default async function SinglePage(props: singlepageType) {
  const findUser = await prisma.post.findUnique({
    where: {
      slug: props.params.slug,
    },
  });

  return (
    <div className="bg-[#0f172a] px-[20px] md:px-[30px] xxl:px-0 pb-[50px] lg:py-[80px]">
      <div className="container mx-auto">
        {/* header and image */}
        <div className="flex flex-col gap-9 lg:flex-row md:items-center items-start justify-center pt-[50px] mb-[70px] ">
          <div className="flex flex-col  md:gap-[30px] ">
            <h1
              className="text-white text-[32px] md:text-[54px] lg:text-[65px] md:leading-[50px]
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
                <p className="text-white font-[500] ">Javokhir Tursunboev</p>
                <p className="text-white text-[14px]">01.01.2024</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* ================= share side ===================== */}
              <div className="flex items-center justify-end gap-5 mt-[20px] border-y-1 w-full py-5">
                <LikeButton col="white" />
                <Link href="#comments">
                  <FaRegComment className="text-white " />
                </Link>
                <PopOver color="white" />
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
            className="w-auto h-auto "
          />
        </div>

        {/*================= text============== */}
        <div className="mb-[40px] lg:mb-[80px]  ">
          <p className="text-white text-[18px] align-center">{findUser?.desc}</p>
        </div>

        {/* ============== comments ======= */}
        <div id="comments">
          <Comments />
        </div>
      </div>
    </div>
  );
}
