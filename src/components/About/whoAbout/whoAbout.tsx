"use client";
import Image from "next/image";
import { UseScrollTrigger, GlobalCountUp } from "./../../GlobalComponents/countdown";
import { useState } from "react";
import { motion } from "framer-motion";

export default function WhoAbout() {
  const [aboutCount, AboutSetCount] = useState(false);
  // !gsap
  UseScrollTrigger(
    ".aboutCountDown",
    "top 80%",
    "bottom 20%",
    () => AboutSetCount(true),
    () => AboutSetCount(true)
  );
  return (
    <div
      className="pt-[60px] pb-[30px]
                md:pt-[80px] lg:pt-[140px] md:pb-[50px] 
                flex flex-col lg:flex-row 
                lg:gap-[30px] mx-auto px-[20px] md:px-[30px] lg:px-0
                container "
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: 200 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        className="md: flex-1 lg:flex-2"
      >
        <Image src="/aboutImgs/phone.png" width={740} height={740} alt="phone" priority={false} />
      </motion.div>
      {/* text part */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0, 0.71, 0.2, 1.01] }}
        className="md:flex-1 lg:max-w-[520px] py-[15px]"
      >
        <div className="flex  flex-col gap-[30px] mb-[40px]">
          <p className="text-[#c75c6f] font-bolder mb-[15px] lg:text-[20px] ">Who we are</p>
          <h1 className="text-[34px] leading-10  md:leading-none  md:text-[60px] ">
            Building sofware for world changers
          </h1>
          <p className="leading-5 md:leading-7 md:text-[18px]">
            Creative Thought is a newly established creative web studio specializing in design and
            advertising. We believe design is more than aesthetics - it is about conveying the right message
            and engaging your customers positively. Our experience spans many years in designing, developing,
            and marketing websites.
          </p>
          <p className="leading-5  md:leading-7 md:text-[18px]">
            We leverage leading website technology to create advanced database-driven solutions and simple
            micro-sites for campaigns. Our expertise in brand management and internet marketing strategies,
            including search engine and social media optimization, makes us an ideal partner for your business
            growth.
          </p>
        </div>

        {/* year of experience */}
        <div className="flex gap-[20px] mx-auto aboutCountDown">
          <div>
            {aboutCount && <GlobalCountUp count={true} dataCar={{ numPer: 2 }} />}
            <p>Years of on the market</p>
          </div>

          {/* num of Projects */}

          <div>
            {aboutCount && <GlobalCountUp count={true} dataCar={{ numPer: 200 }} />}
            <p>Projects delivered so far</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
