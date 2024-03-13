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
        
      </div>
    </div>
  );
}
