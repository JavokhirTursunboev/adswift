"use client";
import { ACommentData } from "@/fakedata/AboutCommnet";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";

export default function AboutComment() {
  return (
    <div className="bg-[#27272E] w-full  mt-[80px] pb-[50px] lg:py-[70px] px-[20px] md:px-[30px] xl:px-0">
      <div className="container mx-auto">
        <div>
          <p className="text-[#c75c6f] font-bolder mb-[15px] lg:text-[20px] pt-[50px] ">Testimonial</p>
          <h1 className="text-[36px] md:text-[35px] lg:text-[55px] w-full  text-white mb-[35px] ">
            From getting started
          </h1>
        </div>
        <span></span>
        <div className="lg:grid lg:grid-cols-3 gap-[30px]">
          {ACommentData.map((item) => {
            return (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3, ease: easeIn }}
                key={item.name}
                className="my-[40px] flex flex-col gap-[30px] "
              >
                <motion.p
                  initial={{ rotate: 100 }}
                  whileInView={{ rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    mass: 0.75,
                    stiffness: 100,
                    delay: 0.5,
                    duration: 0.3,
                    ease: easeIn,
                  }}
                  className="text-blue-500 text-[50px]"
                >
                  {item.logo}
                </motion.p>
                <p className="text-white text-[18px] lg:text-[24px]">{item.text}</p>
                <div className="flex  items-center gap-3 ">
                  <Image src={item.img} height={50} width={50} alt="people" className="rounded-full" />
                  <div>
                    <p className="text-white text-[16px] lg:[18px] ">{item.name} </p>
                    <p className="text-[#999fae] text-[14px] lg:[16px]">{item.job} </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
