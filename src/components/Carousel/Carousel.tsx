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

import Image from "next/image";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
export default function CarouselParent() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [count, setCount] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setActiveImageIndex(swiper.activeIndex);
  };

  // ! =============== GSAP SCROLL ======================
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".triggered", // replace with your trigger element selector
      start: "top 80%", // adjust the start position as needed
      end: "bottom 20%", // adjust the end position as needed
      onEnter: () => setCount(true),
      onLeaveBack: () => setCount(true),
    });
  }, []);
  return (
    <div className=" container flex w-full mx-auto px-[20px]  py-[80px]   m-auto">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className="w-full lg:max-w-[550px] "
      >
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
          onSlideChange={handleSlideChange}
        >
          {dataCarousel.map((dataCar, index) => {
            return (
              <SwiperSlide key={index} className="h-full w-full flex ">
                <p className="text-[16px]  text-[#C75C6F]  mb-[15px] font-bold">{dataCar.sub}</p>
                <div className=" mx-auto flex flex-col gap-[30px] w-full ">
                  <h1
                    className="text-[34px] md:text-[45px] lg:text-[55px]
                   xl:text-[56px] leading-[38px] md:leading-[45px] lg:leading-[60px] font-bold w-full"
                  >
                    {dataCar.mainH}
                  </h1>
                  <p>{dataCar.mainP}</p>
                  <p>{dataCar.secondP}</p>

                  <div className="mt-[40px]">
                    <GlobalBtn name={"Read Case Study"} />
                  </div>

                  <div className=" flex my-[60px]  gap-[60px] triggered">
                    <div className="flex flex-col ">
                      <div className="flex">
                        {count && (
                          <CountUp
                            start={0}
                            end={dataCar.numPer}
                            duration={2.5}
                            delay={0}
                            style={{
                              fontSize: "clamp(30px, 5vw, 50px)",
                              color: "#C75C6F",
                              fontWeight: "bold",
                            }}
                          />
                        )}
                        <span className="text-[#C75C6F] font-bold text-[30px] md:text-[5vw] xl:text-[50px]">
                          %
                        </span>
                      </div>
                      <p>ROI increase</p>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex">
                        {count && (
                          <CountUp
                            start={0}
                            end={dataCar.num}
                            duration={3}
                            delay={0}
                            style={{
                              fontSize: "clamp(30px, 5vw, 50px)",
                              color: "#C75C6F",
                              fontWeight: "bold",
                            }}
                          />
                        )}
                        <span className="text-[#C75C6F] font-bold text-[30px] md:text-[5vw] xl:text-[50px]">
                          k
                        </span>
                      </div>
                      <p className="1rem">Monthly Website Visits</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className=" hidden lg:flex flex-1"
      >
        <Image
          src={`/imageCar/${activeImageIndex + 1}.png`}
          alt="carousel images"
          className=" lg:block w-[450px] h-[450px] xl:w-auto xl:h-auto"
          width={450}
          height={450}
        />
      </motion.div>
    </div>
  );
}
