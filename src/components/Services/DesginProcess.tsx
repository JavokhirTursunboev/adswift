"use client";

import Image from "next/image";
import { easeIn, motion } from "framer-motion";
import styles from "./Design.module.css";
export default function DesginProcess() {
  return (
    <div className="px-[20px] md:px-[30px] xxl:px-0 pt-[60px] container mx-auto md:mx-0 ">
      <div className="text-center mb-[40px] ">
        <p className="mb-4 lg:text-[18px] text-[#E4405F]">Process</p>
        <h1 className="mb-[30px] text-[33px] md:text-[40px] lg:text-[50px] xl:text-[60px]">
          Our Design Process
        </h1>
        <p>Our comprehensive work strategy ensures a perfectly crafted design for your business needs.</p>
      </div>

      <div>
        {/* box 1 */}

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            ease: easeIn,
          }}
          className="md:flex md:items-center  md:gap-[30px] md:mb-[80px]"
        >
          <div className={`md:flex  md:flex-col md:items-end serviceImg ${styles.serviceImg}`}>
            <Image
              quality={100}
              priority={false}
              src="/service/process-1.png"
              alt="box"
              width={410}
              height={410}
              className="md:flex-1"
            />
          </div>
          <div className="md:flex flex-1 md:flex-col md:items-start">
            <p className="text-[#c75c6f] text-bolder lg:w-[60%]">Step one</p>
            <h1 className="text-bolder mb-[30px] text-[32px] md:text-[40px] lg:w-[60%]">Discover</h1>
            <p className="lg:w-[60%] text-[#737387]">
              Embark on a journey of exploration to uncover the unique requirements and challenges of your
              project, laying the groundwork for innovative solutions.
            </p>
          </div>
        </motion.div>

        {/* ===================== box 2  ===============================*/}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            ease: easeIn,
          }}
          className="flex md:flex flex-col-reverse md:flex-row md:items-center  md:gap-[30px] md:mb-[80px]"
        >
          <div className="md:flex md:flex-col md:flex-1 md:items-end ">
            <p className="text-[#c75c6f] text-bolder lg:w-[60%] ">Step two</p>
            <h1 className="text-bolder md:text-bold mb-[30px] text-[32px] md:text-[40px] lg:w-[60%] ">
              Prototype
            </h1>
            <p className="lg:w-[60%]  text-[#737387]">
              Translate insights into tangible prototypes, refining concepts and functionalities iteratively
              to ensure a seamless user experience.
            </p>
          </div>
          <div className={`max-w-[410px] max-h-[410px] ${styles.serviceImg}`}>
            <Image
              quality={100}
              priority={false}
              src="/service/process-2.png"
              alt="box"
              width={410}
              height={410}
              className=" md:flex-1"
            />
          </div>
        </motion.div>

        {/* ========================box 3 ======================================*/}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            ease: easeIn,
          }}
          className="md:flex md:items-center  md:gap-[30px] md:mb-[80px]"
        >
          <div className={`md:flex  md:flex-col md:items-end serviceImg ${styles.serviceImg}`}>
            <Image
              quality={100}
              priority={false}
              src="/service/process-3.png"
              alt="box"
              width={410}
              height={410}
              className="md:flex-1"
            />
          </div>
          <div className="md:flex flex-1 md:flex-col md:items-start">
            <p className="text-[#c75c6f] text-bolder lg:w-[60%]">Step three</p>
            <h1 className="text-bolder mb-[30px] text-[32px] md:text-[40px] lg:w-[60%]">Test</h1>
            <p className="lg:w-[60%] text-[#737387]">
              Conduct rigorous testing across various scenarios and user interactions, validating the design s
              effectiveness and identifying areas for improvement
            </p>
          </div>
        </motion.div>

        {/* box */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            ease: easeIn,
          }}
          className="flex md:flex flex-col-reverse md:flex-row md:items-center  md:gap-[30px]  md:mb-[80px]"
        >
          <div className="md:flex-1 md:flex md:flex-col md:items-end">
            <p className="text-[#c75c6f] text-bolder lg:w-[60%]">Step four</p>
            <h1 className="text-bolder mb-[30px] text-[32px] md:text-[40px] lg:w-[60%]">Build</h1>
            <p className="lg:w-[60%] text-[#737387]">
              With insights gained and designs validated, proceed to the development phase, bringing the
              vision to life with meticulous attention to detail.
            </p>
          </div>
          <span className={styles.serviceImg}>
            <Image
              quality={100}
              priority={false}
              src="/service/process-4.png"
              alt="box"
              width={410}
              height={410}
              className=" md:flex-1"
            />
          </span>
        </motion.div>
        {/* end box */}
      </div>
    </div>
  );
}
