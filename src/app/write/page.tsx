import prisma from "@/utils/connect";
import { redirect } from "next/navigation";
import slugify from "slugify"; // Import slugify library
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default function Write() {
  async function writePost(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    const slug = slugify(title, { lower: true });

      // Get the server session
    const session = await getServerSession(authOptions);
    console.log(session)
    // Check if userEmail is available
    const userEmail = session?.user?.email;
    const postUsername = session?.user.username
    if (!userEmail || !postUsername ) {
      console.error("User email is not available.");
      return;
    }
   
    const createPost = await prisma.post.create({
      data: {
        title,
        desc,
        slug,
        userEmail: userEmail,
        postUsername: postUsername
      },
    });
    redirect("/posts");
  }
  return (
    <div className="mx-auto container ">
      <form action={writePost}>
        <div>
          <input type="text" className="py-[30px] text-[30px] md:text-[40px] xl:text-[50px]   border-none outline-none w-full  " placeholder="Title" name='title' />
        </div>
        <div>
         
          <textarea rows={7} cols={36} className=" text-[18px] md:text-[20px]    border-none outline-none  w-full " placeholder="Context" name="desc" />
        </div>

        <button type="submit" className="flex items-center gap-2 border-none bg-green-600 rounded-md px-5  py-2 text-white hover:text-yellow-500  "><MdOutlinePublishedWithChanges /> Save </button>
      </form>
    </div>
  );
}
