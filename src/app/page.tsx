import Service from "@/components/services/Service";
import Intro from "./../components/intro";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-[20px] lg:px-0">
        <Intro />
      </div>
      <div>
        <Service />
      </div>
    </>
  );
}
