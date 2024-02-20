import Image from "next/image";
import Link from "next/link";
import PopOver from "./PopOver/PopOver";

export default function PostCard() {
  return (
    <div>
      <div className="mb-[50px] md:flex  hidden  items-center gap-[50px] ">
        {/* image container */}
        <div className=" flex-1 h-[350px] w-[350px] relative  ">
          <Image src="/images/cactus.jpg" alt="post image" fill className="object-cover rounded-[10px]" />
        </div>
        {/* text container */}
        <div className="flex-1 flex flex-col gap-[15px] xl:gap-[30px]">
          {/* ============= detail =============  */}
          <div className="flex items-center justify-between">
            <span className="text-gray-500">11.02.2023</span>
            <PopOver />
          </div>

          {/* =========== text title ============ */}
          <Link href="#">
            <h1 className=" md:text-[22px] xl:text-[28px] font-bold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima.
            </h1>
          </Link>
          <p className="xl:text-[18px] font-300 text-[#626262]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aliquam, harum sequi sapiente iste
            culpa quis dignissimos voluptate blanditiis, et inventore repellendus. Sit, accusantium! et
            inventore repellendus. Sit, accusantium!
          </p>

          <Link href="#" className="border-b-1 border-crimson-500 w-max p-y ">
            Read More
          </Link>
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
          <Image src="/images/cactus.jpg" alt="post image" fill className="object-cover" />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Tailwind card
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
          </p>
        </div>
        <div className="p-6 pt-0 flex items-center justify-between">
          <Link
            href="#"
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
          <PopOver />
        </div>
      </div>
    </div>
  );
}
