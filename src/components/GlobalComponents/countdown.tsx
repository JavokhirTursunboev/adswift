// globals.tsx

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const UseScrollTrigger = (
  selector: string,
  start: string,
  end: string,
  onEnter: () => void,
  onLeaveBack: () => void
) => {
  useEffect(() => {
    const scrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        start,
        end,
        onEnter,
        onLeaveBack,
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [selector, start, end, onEnter, onLeaveBack]);
};

interface GlobalCountUpProps {
  count: boolean;
  dataCar: { numPer: number };
}

export const GlobalCountUp: React.FC<GlobalCountUpProps> = ({ count, dataCar }) => {
  return (
    count && (
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
    )
  );
};
