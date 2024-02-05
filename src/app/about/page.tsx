import AboutMain from "@/components/About/AboutMain/AboutMain";
import WhoAbout from "./../../components/About/whoAbout/whoAbout";

export default function page() {
  return (
    <div>
      <div>
        <AboutMain />
      </div>
      {/* who we are part */}

      <div>
        <WhoAbout />
      </div>
    </div>
  );
}
