"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function AboutMain() {
  return (
    <div
      className=" 
     bg-gradient-to-r
     from-gray-200 via-gray-200 
    to-transparent  w-full  pt-[20px]  px-[20px] md:h-screen "
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col w-full mb-[30px] md:mt-[50px] flex-1 "
        >
          <h1 className="text-[34px] md:text-[50px] text-[#000248] leading-[41px] mb-[30px] font-medium    ">
            One of the fastest growing agency
          </h1>
          <p>We design and develop web and mobile applications for our clients worldwide</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          className=" md:w-[690px] lg:w-[950px] flex-1 lg:flex-[1.6] "
        >
          <Image
            src="/aboutImgs/banner.png"
            alt="phone"
            width={1000}
            height={900}
            className="lg:w-[full]"
            priority={false}
          />
        </motion.div>
      </div>
    </div>
  );
}
