"use client";
import dynamic from "next/dynamic";
// Dynamically import the Card component
const Card = dynamic(() => import("@/components/Portfolio/Card"),{
  loading: () => <p>loading...</p>
});
import { Projects } from "@/fakedata/data";
import { useScroll } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function Page() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // !smooth sroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  return (
    <main ref={container} className="mt-[50px] mb-[100vh] my-auto">
      {Projects.map((project, i): ReactNode => {
        const targetScale = 1 - (Projects.length - i) * 0.05;

        return (
          <Card
            key={`p_${i}`}
            i={i}
            progress={scrollYProgress}
            {...project}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
