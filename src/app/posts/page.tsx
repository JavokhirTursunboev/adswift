import PostCard from "@/components/Posts/Card";

export default function Posts() {
  return (
    <div className="px-[20px] md:px-[30px]  pt-[60px] container mx-auto ">
      <div className="flex-5 ">
        <h1 className=" text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-center font-bold ">
          Recently Posts
        </h1>
        {/* posts */}
        <div className="my-[50px] mx-0">
          {/* single card */}
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
}
