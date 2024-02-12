"use client";
import Image from "next/image";
import GlobalBtn from "../../GlobalComponents/button";
import { easeIn, motion } from "framer-motion";
import Link from "next/link";
export default function Intro() {
  return (
    <>
      <div
        className=" flex container mx-auto
         flex-col   px-[20px] md:px-[30px] xxl:px-0 
          lg:min-h-[800px]  
      lg:flex-row 
       lg:items-center
        justify-between 
        gap-[30px] mt-[20px] "
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeIn }}
          className="flex flex-col  gap-[3rem] items-start lg:max-w-[570px] 
"
        >
          <h1
            className="text-[2.5rem] md:text-[55px] xl:text-[78px]
          leading-[40px] md:leading-none  lg:mt-[5rem]  font-medium lg:font-bold "
          >
            Build beautiful website & mobile apps.
          </h1>
          <p className="text-[16px]]">
            Create live segments and target the right people for messages based on their behaviors.
          </p>
          <Link
            href="/contact"
            className="bg-[#5ab424] py-[20px] px-[40px] text-white rounded-[20px] hover:bg-blue-600"
          >
            Get Start
          </Link>
        </motion.div>

        <div className="h-auto ">
          <div className="relative lg:mt-[50px] ">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              // transition={{ duration: 0.5, delay: 0.4, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <Image
                src="/web4.png"
                width={600}
                height={600}
                alt="main"
                className="absolute  "
                quality={100}
                priority={false}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <Image
                src="/k5c.png"
                width={600}
                height={600}
                alt="main "
                className="relative"
                quality={100}
                priority={false}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
