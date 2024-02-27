import prisma from "@/utils/connect";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
const QuillEditor = dynamic(() => import("@/components/Posts/Edit/Edit"), {
  ssr: false,
});

interface editType {
  params: {
    slug: string;
  };
}
export default async function EditPage(props: editType) {
  const slug = props.params.slug;
  const editPost = await prisma.post.findUnique({
    where: { slug },
  });

  if (!editPost) {
    notFound();
  }

  return (
    <div>
      <div className="mx-auto container ">
        <QuillEditor editPost={editPost} />
        {/* <form action="" className="w-full border-1 rounded ">
          <div className="text-center">
            <p className=" text-[18px] lg:text-[22px]">Title</p>
            <input
              type="text"
              className="border border-black w-full md:w-2/3 px-4 py-2 "
              name="title"
              defaultValue={editPost.title}
            />
          </div>
          <div className="text-center">
            <p>Context</p>
            <textarea
              className="border border-black w-full md:w-2/3 px-4 py-2 "
              name="desc"
              defaultValue={editPost.desc}
              rows={7}
              cols={33}
            />
          </div>
          <button type="submit"> Edit </button>
        </form> */}
      </div>
    </div>
  );
}
