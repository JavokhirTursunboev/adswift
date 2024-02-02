"use client";
import { useRef, useState } from "react";
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

// swiper
export default function CarouselParent() {
  return (
    <div className=" container flex w-full mx-auto px-[20px]  py-[80px]   m-auto">
      <div className="w-full lg:max-w-[550px] ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
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
                <div className=" mx-auto flex flex-col gap-[30px]  ">
                  <h1
                    className="text-[25px] md:text-[32px] lg:text-[40px]
                   xl:text-[46px]  leading-[60px] font-medium"
                  >
                    {dataCar.mainH}
                  </h1>
                  <p>{dataCar.mainP}</p>
                  <p>{dataCar.secondP}</p>

                  <div>
                    <GlobalBtn name={"Read Case Study"} />
                  </div>
                  <div className=" flex my-[60px]  gap-[60px]">
                    <div className="flex flex-col ">
                      <p>{dataCar.numPer}</p>
                      <p>ROI increase</p>
                    </div>
                    <div className="flex flex-col">
                      <p>{dataCar.num}</p>
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
