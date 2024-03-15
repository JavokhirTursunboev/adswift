import Image from "next/image";
import Link from "next/link";
import PopOver from "./PopOver/PopOver";
import LikeButton from "../GlobalComponents/likeButton/LikeButton";
import { FaRegComment } from "react-icons/fa";

type PostType = {
  id: string;
  createdAt: Date;
  slug: string;
  title: string;
  desc: string;
  img?: string;
  views: number;
  userEmail: string;
};
type PostCardProps = {
  key: string;
  item: PostType;
};
export default function PostCard({ item }: PostCardProps): JSX.Element {
  return (
    <div>
      <div className="mb-[50px] md:flex  hidden  items-center gap-[50px] ">
        {/* image container */}
        <div className=" flex-1 h-[350px] w-[350px] relative  ">
          <Image
           src={item?.img || `/defaults/defaultPost.png`} // change to late
            alt="post image"
            fill
            className="object-cover rounded-[10px]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            
          />
        </div>
        {/* text container */}
        <div className="flex-1 flex flex-col gap-[15px] xl:gap-[30px]">
          {/* ============= detail =============  */}
          <div>
            <span className="text-gray-500">{String(item?.createdAt).slice(0, 10)}</span>
          </div>
          {/* =========== text title ============ */}
          
            <h1 className="md:text-[22px] xl:text-[38px] font-bold">{item.title}</h1>
     

         

          {/* ================ like and read more =========== */}
          <div className="flex items-center justify-between">
            <Link href={`/posts/${item.slug}`} className="border-b-1 border-crimson-500 w-max p-y ">
              Read More
            </Link>
            <div className="flex items-center gap-4 ">
              <LikeButton col="black" />
              <Link href="#">
                <FaRegComment className="text-black" />
              </Link>
              <PopOver color="black" slug={item.slug} titleProp={item.title}/>
            </div>
          </div>
        </div>
      </div>

      {/* ======= FOR PHONE =====  */}
      <div
        className=" md:hidden relative flex max-w-[450px] 
      flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-[70px] mx-auto "
      >
        <div
          className="relative mx-4 -mt-6 h-40
         overflow-hidden rounded-xl bg-blue-gray-500
          bg-clip-border text-white shadow-lg shadow-blue-gray-500/40
           bg-gradient-to-r from-blue-500 to-blue-600"
        >
          <Image  src={item?.img || `/defaults/defaultPost.png`} alt="post image" fill className="object-cover rounded-[10px]" />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {item.title}
          </h5>
          
        </div>
        <div className="p-6 pt-0 flex items-center justify-between">
        <Link href={`/posts/${item.slug}`}
            data-ripple-light="true"
            type="button"
            className="select-none 
            rounded-lg bg-blue-500 py-3 px-6 
            text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md
             shadow-blue-500/20 
             transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Read More
          </Link>
          <div className="flex items-center gap-4 ">
            <LikeButton col="black" />
            <Link href="#">
              <FaRegComment className="text-black" />
            </Link>
            <PopOver color="black" slug={item.slug} titleProp={item.title}/>
          </div>
        </div>
      </div>
    </div>
  );
}
