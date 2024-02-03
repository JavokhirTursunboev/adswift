"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { dataCarousel } from "./dataCarousel";
import GlobalBtn from "../GlobalComponents/button";

import AnimatedNumbers from "react-animated-numbers";
import { useState } from "react";

export default function CarouselParent() {
  const [num, setNum] = useState(0);

  let number = 100;
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
                      <AnimatedNumbers
                        includeComma
                        transitions={(index) => ({
                          type: "spring",
                          duration: index + 1.4,
                        })}
                        animateToNumber={dataCar.num}
                        fontStyle={{
                          fontSize: "50px",
                          color: "#C75C6F",
                          fontWeight: "bold",
                        }}
                      />
                      <p>ROI increase</p>
                    </div>
                    <div className="flex flex-col">
                      <AnimatedNumbers
                        includeComma
                        transitions={(index) => ({
                          type: "spring",
                          duration: index + 2.9,
                        })}
                        animateToNumber={dataCar.numPer}
                        fontStyle={{
                          fontSize: "50px",
                          color: "#C75C6F",
                          fontWeight: "bold",
                        }}
                      />
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
