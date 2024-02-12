"use client";

import { WeBuild_Data } from "@/fakedata/WeBuild_data";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

export default function WeBuild() {
  return (
    <div className="bg-[#27272E] w-full px-[20px] md:px-[30px] xl:px-0 pb-[30px] md:pb-[70px] lg:pt-[20px]">
      <div className="mx-auto container">
        {/* = ===== = = =    TEXt = = = ====== */}
        <div
          className="flex  flex-col mx-auto items-center gap-[30px] py-[50px] 
         "
        >
          <h3 className="text-[#c75c6f]  text-[16px] md:text-[20px]   lg:pt-[60px] ">Top Clinets</h3>
          <h1 className="text-white text-center w-full text-[34px] md:text-[50px] lg:text-[60px] leading-10 md:leading-[70px]">
            We&apos;ve built solutions for...
          </h1>
          <p className="text-[#88888C] text-[16px] text-center  md:text-[18px] leading-6 lg:max-w-[80%] ">
            Design anything from simple icons to fully featured websites and applications.
          </p>
        </div>
        {/* ===  IMAGES === */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease: easeInOut }}
          className="grid grid-cols-2 lg:grid-cols-4 mx-auto "
        >
          {WeBuild_Data.map((item) => {
            return (
              <div
                key={item.img}
                className="w-[233] h-[133] opacity-[0.3] grayscale hover:opacity-100 hover:grayscale-0 
                transition-all ease-in-out duration-300"
              >
                <Image
                  src={item.img}
                  alt="logo"
                  width={233}
                  height={133}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
