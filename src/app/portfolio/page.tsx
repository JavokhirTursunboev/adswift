"use client";
import dynamic from "next/dynamic";
// Dynamically import the Card component

interface PortfolioItem {
  _id: string;
  description: string;
  color: string;
  title: string;
  img: string; 
  link: string;
}

const Card = dynamic(() => import("@/components/Portfolio/Card"), {
  loading: () => <p>loading...</p>,
});
// import { Projects } from "@/fakedata/data";
import { useScroll } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";


export default function Page() {
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Networking response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setPortfolios(data);
      })
      .catch((e) => {
        console.error("error fetching portoflios", e);
      });
  }, []);

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
      {portfolios.map((item, i): ReactNode => {
        const targetScale = 1 - (portfolios.length - i) * 0.05;
          
        return (
          <Card
            key={item._id}
            i={i}
            progress={scrollYProgress}
            img={item.img}
            description={item.description}
            color={item.color}
            title={item.title}
            link={item.link}
            // add this line
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
