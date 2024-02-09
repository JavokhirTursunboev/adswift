"use client";
import { AboutValue_Fake } from "@/fakedata/AboutValue_Fake";
import { easeIn, motion } from "framer-motion";

export default function AboutValues() {
  return (
    <div className="bg-[#27272E] w-full px-[20px] md:px-[30px] xxl:px-0  pt-[60px] pb-[20px] ">
      <div className="container mx-auto">
        {/* !=========== header ================ */}
        <div>
          <p className="text-[#c75c6f] font-bolder mb-[15px] lg:text-[20px] ">Our Values</p>
          <h1 className="text-[36px] md:text-[35px] lg:text-[55px] w-full  text-white mb-[35px] ">
            Why should you work with us?
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-[40px] ">
            Join AdSwift for excellence, collaboration, and innovation. Grow with us in a culture valuing
            creativity and continuous development.
          </p>
        </div>

        {/* !=========== Boxes ================ */}

        <div className="md:grid grid-cols-1 lg:grid-cols-3  lg:gap-6">
          {/* =========== Box =================== */}
          {AboutValue_Fake.map((value) => {
            return (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  ease: easeIn,
                }}
                viewport={{ once: true }}
                key={value.id}
                className="mb-[60px] oneBox  cursor-pointer"
              >
                <div className="mb-[40px]   w-[80px] h-[80px]  ">
                  <p className="text-white text-[32px] md:text-[36px] lg:text-[45px]  h-[80px] flex items-center justify-center lin rounded-full ">
                    {value.numb}
                  </p>
                </div>
                <h1 className="text-[20px] ] text-white pb-[30px]">{value.header}</h1>
                <p className="text-base text-[#b5b7b8] pb-[30px] parag">{value.parag}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
