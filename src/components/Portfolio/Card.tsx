"use client";
interface CardProps {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  i?: number;
  range?: number[];
  targetScale?: number;
  progress?: MotionValue<number>;
}
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Card({
  i,
  title,
  description,
  src,

  color,
  progress,
  range,
  targetScale,
}: CardProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-[100vh] w-[90%] md:w-full
       mx-auto flex  items-center justify-center
        sticky top-0 "
    >
      <motion.div
        style={{ scale, backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
        className="bg-[color]
         flex
         flex-col relative lg:top-[-10] top-[-10%]
          h-[500px] max-w-[1000px]
           rounded-[25px] p-[20px] lg:p-[50px]
            transform-origin-top"
      >
        {/* Image for Phone */}
        <div className=" md:hidden   relative w-full h-full rounded-[25px] overflow-hidden">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <Image fill src={`/images/${src}`} alt="iamges" className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </motion.div>
        </div>
        <h2 className="text-center text-[22px] lg:text-[28px] mt-[20px] ">{title}</h2>
        {/* body */}
        <div className="flex flex-col lg:flex-row h-full lg:mt-[50px]  gap-[50px]">
          <div className=" w-full lg:w-[40%] relative top-[10%]">
            <p className="text-[13px] lg:text-[16px]">{description}</p>
            <span className="flex items-center gap-[5px] ">
              <a href="#" target="_blank" className="text-[12px] underline cursor-pointer">
                See more
              </a>
            </span>
          </div>

          <div className="hidden md:block relative w-[60%] h-full rounded-[25px] overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image fill src={`/images/${src}`} alt="iamges" className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
