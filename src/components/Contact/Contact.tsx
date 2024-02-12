"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Contact() {
  const pathname = usePathname();
  return (
    <div className="container w-full mx-auto    px-[20px] md:px-[30px] xxl:px-0  pt-[80px]">
      <div className="pb-[40px] md:pb-[100px]">
        <div className="mb-[35px]">
          <Link href="/">Home </Link>
          <span>{" >"} </span>
          <Link href="/contact" className={pathname === "/contact" ? "text-blue-600" : ""}>
            Contact
          </Link>
        </div>
        <p className="text-[32px] md:text-[56px] lg:text-[64px] font-semibold ">Contact</p>
      </div>
      <div className="flex  flex-col lg:flex-row">
        <div className="shadow-lg rounded-xl mb-[30px] p-[50px]">
          <p className="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] mb-[30px] font-bolder">
            Contact Us for Pricing
          </p>
          <form>
            {/* ======Input line  */}
            <div className="flex flex-col mb-[1rem]">
              <label htmlFor="name" className="mb-[10px]">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-[20px] py-[15px] rounded-[16px] border-1 border-[#E3E6E9]"
              />
            </div>
            {/* ========Input line end==========  */}
            {/* ======Input line  */}
            <div className="flex flex-col mb-[1rem]">
              <label htmlFor="name" className="mb-[10px]">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-[20px] py-[15px] rounded-[16px] border-1 border-[#E3E6E9]"
              />
            </div>
            {/* ========Input line end==========  */}
            {/* ======Input line  */}
            <div className="flex flex-col mb-[1rem]">
              <label htmlFor="company" className="mb-[10px]">
                Company
              </label>
              <input
                id="company"
                type="text"
                className="w-full px-[20px] py-[15px] rounded-[16px] border-1 border-[#E3E6E9]"
              />
            </div>
            {/* ========Input line end==========  */}
            {/* ======Input line  */}
            <div className="flex flex-col mb-[1rem]">
              <label htmlFor="help" className="mb-[10px]">
                How can we help you?
              </label>
              <textarea
                id="help"
                className="w-full px-[20px] py-[15px] rounded-[16px] border-1 border-[#E3E6E9] "
              />
            </div>
            {/* ========Input line end==========  */}

            <button
              type="submit"
              className="text-white bg-[#5AB424] w-full mb-[16px] rounded-[20px] px-[55px] py-[18px]
              hover:bg-[#0d6efd] hover:ease-in-out duration-300
              "
            >
              Get Pricing Now
            </button>
          </form>
        </div>

        <div>
          <div>phone</div>
          <div>email</div>
        </div>
      </div>
    </div>
  );
}
