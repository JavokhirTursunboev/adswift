import AboutMain from "@/components/About/AboutMain/AboutMain";
import WhoAbout from "./../../components/About/whoAbout/whoAbout";
import AboutValues from "./../../components/About/AboutValues/AboutValues";

export default function Page() {
  return (
    <div>
      <div>
        <AboutMain />
      </div>
      {/* who we are part */}

      <div>
        <WhoAbout />
      </div>
      <div>
        <AboutValues />
      </div>
    </div>
  );
}
