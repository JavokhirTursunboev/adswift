"use client";
import { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { dataCarousel } from "./dataCarousel";
import GlobalBtn from "../GlobalComponents/button";
import { animate, useMotionValue, useTransform, motion } from "framer-motion";

// swiper
export default function CarouselParent() {
  // animation for number
  const count = useMotionValue(0);
  const countNumPer = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const roundedNumPer = useTransform(countNumPer, (latest) => Math.round(latest));
  useEffect(() => {
    const controlsNum = animate(count, dataCarousel[0].num);
    const controlsNumPer = animate(countNumPer, dataCarousel[0].numPer);
    return () => {
      controlsNum.stop();
      controlsNumPer.stop();
    };
  }, [count, countNumPer]);

  return (
    <div className=" container flex w-full mx-auto px-[20px]  py-[80px]   m-auto">
      <div className="w-full lg:max-w-[550px] ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={false}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className=""
        >
          {dataCarousel.map((dataCar) => {
            return (
              <SwiperSlide key={dataCar.mainH} className="h-full w-full flex ">
                <p className="text-[16px]  text-[#C75C6F]  mb-[15px] font-medium">{dataCar.sub}</p>
                <div className=" mx-auto flex flex-col gap-[30px] w-full ">
                  <h1
                    className="text-[25px] md:text-[45px] lg:text-[55px]
                   xl:text-[56px]  leading-[60px] font-medium w-full"
                  >
                    {dataCar.mainH}
                  </h1>
                  <p>{dataCar.mainP}</p>
                  <p>{dataCar.secondP}</p>

                  <div className="mt-[40px]">
                    <GlobalBtn name={"Read Case Study"} />
                  </div>
                  <div className=" flex my-[60px]  gap-[60px]">
                    <div className="flex flex-col ">
                      <motion.p className="text-[50px] font-bold text-[#C75C6F]">{rounded}</motion.p>
                      <p>ROI increase</p>
                    </div>
                    <div className="flex flex-col">
                      <motion.p className="text-[50px] font-bold text-[#C75C6F]">{roundedNumPer}</motion.p>
                      <p>Monthly Website Visits</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className=" hidden lg:flex flex-1">images</div>
    </div>
  );
}
