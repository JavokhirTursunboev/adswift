import PostCard from "@/components/Posts/Card";

type PostType = {
  _id: string;
  createdAt: string;
  title: string;
  desc: string;
  img?: string;
  views: number;
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
        <h1 className=" text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-center font-bold ">
          Recently Posts
        </h1>
        {/* posts */}
        <div className="my-[50px] mx-0">
          {/* single card */}
          {data.map((item: PostType) => (
            <PostCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
