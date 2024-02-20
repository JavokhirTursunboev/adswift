import Image from "next/image";
import Link from "next/link";

export const Comments = () => {
  const status = "authenticated";
  return (
    <div className=" container mb-[50px]">
      <h1 className="text-[#f0f0f0] mb-[30px] text-[32px] md:text-[50px] lg:text-[55px] font-semibold ">
        Comment
      </h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-[30px]">
          <textarea placeholder="write a comment..." className="w-full p-[20px]" id="comment" />
          <button
            type="submit"
            className=" py-[16px] px-[20px] bg-teal-900 text-white border-none rounded-lg cursor-pointer"
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      {/* === all comments === */}
      <div className=" mt-[50px]">
        <div className="mb-[50px]">
          {/* ============= User of commets ================ */}
          <div className="flex gap-5 mb-[20px] ">
            <Image
              src="/AboutComment/testimonial-1.png"
              height={50}
              width={50}
              alt="user"
              className="rounded-full "
            />
            <div>
              <p className="text-white font-[500] ">Javokhir Tursunboev</p>
              <p className="text-white text-[14px]">01,01,2024</p>
            </div>
          </div>

          {/* ======= DESCRIPTION TEXT ========= */}
          <p className="font-[300] text-[18px] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni delectus possimus deserunt,
            iure, placeat quod rem veniam repudiandae, a nihil facilis? Quasi deleniti praesentium, hic quia
            ullam explicabo. Cumque.
          </p>
        </div>
      </div>
      {/* === all comments === */}
      <div className=" mt-[50px]">
        <div className="mb-[50px]">
          {/* ============= User of commets ================ */}
          <div className="flex gap-5 mb-[20px] ">
            <Image
              src="/AboutComment/testimonial-1.png"
              height={50}
              width={50}
              alt="user"
              className="rounded-full "
            />
            <div>
              <p className="text-white font-[500] ">Javokhir Tursunboev</p>
              <p className="text-white text-[14px]">01,01,2024</p>
            </div>
          </div>

          {/* ======= DESCRIPTION TEXT ========= */}
          <p className="font-[300] text-[18px] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni delectus possimus deserunt,
            iure, placeat quod rem veniam repudiandae, a nihil facilis? Quasi deleniti praesentium, hic quia
            ullam explicabo. Cumque.
          </p>
        </div>
      </div>
      {/* === all comments === */}
      <div className=" mt-[50px]">
        <div className="mb-[50px]">
          {/* ============= User of commets ================ */}
          <div className="flex gap-5 mb-[20px] ">
            <Image
              src="/AboutComment/testimonial-1.png"
              height={50}
              width={50}
              alt="user"
              className="rounded-full "
            />
            <div>
              <p className="text-white font-[500] ">Javokhir Tursunboev</p>
              <p className="text-white text-[14px]">01,01,2024</p>
            </div>
          </div>

          {/* ======= DESCRIPTION TEXT ========= */}
          <p className="font-[300] text-[18px] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni delectus possimus deserunt,
            iure, placeat quod rem veniam repudiandae, a nihil facilis? Quasi deleniti praesentium, hic quia
            ullam explicabo. Cumque.
          </p>
        </div>
      </div>
      {/* === all comments === */}
      <div className=" mt-[50px]">
        <div className="mb-[50px]">
          {/* ============= User of commets ================ */}
          <div className="flex gap-5 mb-[20px] ">
            <Image
              src="/AboutComment/testimonial-1.png"
              height={50}
              width={50}
              alt="user"
              className="rounded-full "
            />
            <div>
              <p className="text-white font-[500] ">Javokhir Tursunboev</p>
              <p className="text-white text-[14px]">01,01,2024</p>
            </div>
          </div>

          {/* ======= DESCRIPTION TEXT ========= */}
          <p className="font-[300] text-[18px] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni delectus possimus deserunt,
            iure, placeat quod rem veniam repudiandae, a nihil facilis? Quasi deleniti praesentium, hic quia
            ullam explicabo. Cumque.
          </p>
        </div>
      </div>
    </div>
  );
};
