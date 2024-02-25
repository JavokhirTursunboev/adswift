import Intro from "../components/HomePage/Intro/intro";

import dynamic from "next/dynamic";


const DynamicService = dynamic(() => import("./../components/HomePage/services/Service"), {
  loading: () => <p>loading...</p>,
});
const DynamicCarousel = dynamic(() => import("./../components/HomePage/Carousel/Carousel"), {
  loading: () => <p>loading...</p>,
});
const DynamicFeature = dynamic(() => import("./../components/HomePage/FeatureCase/FeatureCase"), {
  loading: () => <p>loading...</p>,
});

export default function Home() {
  return (
   <>
      <div>
        <Intro />
      </div>
      <div>
        <DynamicService />
      </div>
      <div>
        <DynamicCarousel />
      </div>
      <div>
        <DynamicFeature />
      </div>
    </>
  );
}
