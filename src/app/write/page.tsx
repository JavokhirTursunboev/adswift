import prisma from "@/utils/connect";
import { redirect } from "next/navigation";
import slugify from "slugify"; // Import slugify library

export default function Write() {
  async function writePost(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    const slug = slugify(title, { lower: true });

    // create new record

    const createPost = await prisma.post.create({
      data: {
        title,
        desc,
        slug,
      },
    });
    redirect("/posts");
  }
  return (
    <div className="mx-auto container ">
      <form action={writePost}>
        <div>
          <p>Title</p>
          <input type="text" className="border border-black" name="title" />
        </div>
        <div>
          <p>Context</p>
          <input type="text" className="border border-black" name="desc" />
        </div>

        <button type="submit"> Save </button>
      </form>
    </div>
  );
}
