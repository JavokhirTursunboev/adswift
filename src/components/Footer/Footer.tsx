"use client";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { easeIn, motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="container w-full mx-auto    px-[20px] md:px-[30px] xxl:px-0  pt-[80px]">
      {/*================= icons ===================== */}
      <div className="flex justify-between pb-[50px]">
        <motion.span
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: easeIn,
          }}
        >
          <FaInstagram className=" text-[26px] text-[#525260] hover:text-[#E4405F]" />
        </motion.span>
        <motion.span
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.7,
            ease: easeIn,
          }}
        >
          <FaTwitter className=" text-[26px] text-[#525260] hover:text-[#0d6efd]" />
        </motion.span>
        <motion.span
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.9,
            ease: easeIn,
          }}
        >
          <FaGithub className=" text-[26px] text-[#525260] hover:text-black" />
        </motion.span>
      </div>
      {/* ============ get in touch */}
      <div className="lg:flex lg:gap-[40px]">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            ease: easeIn,
          }}
          viewport={{ once: true }}
          className="lg:flex-1 "
        >
          {/* get in touch */}
          <div>
            <h1 className="mb-[20px] text-[38px] md:text-[56px] text-bolder ">Get in touch!</h1>

            <p className="mb-[40px]">
              Connect with us on social media for updates, news, and exciting content!
            </p>
            {/* mail part */}
            <form
              className="flex w-full justify-around flex-nowrap lg:flex-wrap  items-stretch h-[72px] rounded-[20px] relative"
              style={{
                padding: "10px 10px 10px 55px",
                boxShadow: "0 24px 48px -15px rgba(153, 161, 170, 0.25)",
              }}
            >
              <div className=" hidden sm:block absolute left-[30px] top-[24px] z-1">
                <MdEmail className="text-[22px]" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="px-[15px] py-[5px]
           flex-1
           outline-none
            "
              />
              <button
                type="submit"
                className=" border-none bg-[#5AB424] text-white  rounded-[16px] px-4 md:py-[10px] md:px-[28px] "
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* ==================== service ======================= */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            ease: easeIn,
          }}
          className="flex lg:flex-1 flex-col gap-[50px] py-[40px]"
        >
          <div className=" md:flex md:justify-around ">
            <div className="flex flex-col gap-[16px]">
              <h1 className=" font-bold text-[20px]  ">Services</h1>
              <p className="hover:text-[#0d6efd] cursor-pointer ">Website Designing</p>
              <p className="hover:text-[#0d6efd] cursor-pointer ">Mobile App Development</p>
              <p className="hover:text-[#0d6efd] cursor-pointer ">Web Development</p>
              <p className="hover:text-[#0d6efd] cursor-pointer ">Graphic Designing</p>
              <p className="hover:text-[#0d6efd] cursor-pointer ">UI / UX Designing</p>
              <p className="hover:text-[#0d6efd] cursor-pointer ">Internet Marketing</p>
            </div>
            {/* resource */}
            <div className="flex flex-col gap-[16px]">
              <h1 className=" font-bold text-[20px]">Resourses</h1>
              <p className="hover:text-[#0d6efd] cursor-pointer ">Case Studies</p>
              <p className="hover:text-[#0d6efd] cursor-pointer ">Portfolio</p>
            </div>
            {/* Support */}
            <div className="flex flex-col gap-[16px]">
              <h1 className=" font-bold text-[20px]">Support</h1>
              <p className="hover:text-[#0d6efd] cursor-pointer ">Contact</p>
              <p className="hover:text-[#0d6efd] cursor-pointer ">Terms of Use </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* copy right */}
      <div className=" mx-auto w-full  my-[25px]">
        <hr className=" " />
        <p className=" text-[#757589]  mt-[25px]"> &copy; Copyright 2024. All Right Reserverd</p>
      </div>
    </div>
  );
}
