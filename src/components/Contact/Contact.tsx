"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Contact() {
  const pathname = usePathname();
  return (
    <div className="container w-full mx-auto    px-[20px] md:px-[30px] xxl:px-0  pt-[80px]">
      {/* link line */}
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
      {/* link line end */}
      <div className="flex  flex-col gap-[20px] md:gap-[50px] xl:gap-[100px] lg:flex-row">
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
              className="text-white bg-[#5AB424] w-full my-[16px] rounded-[20px] px-[55px] py-[18px]
              hover:bg-[#0d6efd] hover:ease-in-out duration-300
              "
            >
              Get Pricing Now
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-[30px] lg:gap-[70px] ">
          {/* =============== Phone ====================== */}
          <div className="mb-[30px] bg-[#27272E] px-[50px] py-[60px]  rounded-[15px] w-full lg:mt-[150px] ">
            <p className="text-white text-[20px] md:text-[26px] lg:text-[32px] font-bolder mb-[20px] ">
              Phone
            </p>
            <p className="text-[#999FAE] mb-[40px] w-[80%] ">
              Our customer care is pne from Mon-Fri, 10:00 AM to 6:00 PM{" "}
            </p>
            <a
              href="tel:+82-10-2115-1771"
              className=" text-[25px] md:text-[30px] text-[#FAB8C4] hover:text-white
              transition duration-300 ease-in-out
              "
            >
              (+82)1021151771
            </a>
          </div>

          {/* ======== CONTACT Email ===================== */}
          <div className="mb-[30px] bg-[#27272E] px-[50px] py-[60px]  rounded-[15px] w-full ">
            <p className="text-white text-[20px] md:text-[26px] lg:text-[32px] font-bolder mb-[20px] ">
              Email
            </p>
            <p className="text-[#999FAE] mb-[40px] w-[80%]">
              Our suppot team will get back to in 48 hours during standard business hours.
            </p>
            <a
              href="mailto:adswift@gmail.com"
              className=" text-[25px] md:text-[30px] text-[#FAB8C4] hover:text-white
            transition duration-300 ease-in-out
            "
            >
              adswift@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
