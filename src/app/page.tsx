import Service from "@/components/services/Service";
import Intro from "./../components/intro";
import CarouselParent from "@/components/Carousel/Carousel";

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
    </>
  );
}
