"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GlobalBtn from "@/components/GlobalComponents/button";

export default function AboutTeam() {
  return (
    <div
      className="flex flex-col lg:flex-row  container mx-auto px-[20px] md:px-[30px] xl:px-0
    pt-[60px] md:pt-[80px]
    "
    >
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md: flex-1 "
      >
        <Image
          src="/aboutImgs/bikeMan.png"
          quality={100}
          width={640}
          height={640}
          alt="phone"
          priority={false}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0, 0.71, 0.2, 1.01] }}
        className="md:flex-1  py-[15px]"
      >
        <div className="flex  flex-col gap-[30px] mb-[40px]">
          <p className="text-[#c75c6f] font-bolder mb-[15px] lg:text-[20px] ">Who we are</p>
          <h1 className="text-[34px] leading-10  md:leading-none  md:text-[60px] ">
            Alone we can do so little together we can do so much
          </h1>
          <p className="leading-5 md:leading-7 md:text-[18px]">
            Pioneering together, our team fosters innovation, collaboration, and excellence to redefine
            industry standards and create lasting impact
          </p>
        </div>
        <GlobalBtn name={"Out Team"} />
        {/* year of experience */}
      </motion.div>
    </div>
  );
}
