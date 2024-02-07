import Service from "@/components/HomePage/services/Service";
import Intro from "../components/HomePage/Intro/intro";
import CarouselParent from "@/components/HomePage/Carousel/Carousel";
import FeatureCase from "./../components/HomePage/FeatureCase/FeatureCase";

export default function Home() {
  return (
    <>
      <div>
        <Intro />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <CarouselParent />
      </div>
      <div>
        <FeatureCase />
      </div>
    </>
  );
}
