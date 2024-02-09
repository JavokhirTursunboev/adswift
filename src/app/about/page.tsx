import AboutMain from "@/components/About/AboutMain/AboutMain";
import WhoAbout from "./../../components/About/whoAbout/whoAbout";
import AboutValues from "./../../components/About/AboutValues/AboutValues";
import AboutTeam from "@/components/About/AboutTeam/AboutTeam";
import AboutComment from "@/components/About/AboutComment/AboutComment";

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
      <div>
        <AboutTeam />
      </div>
      <div>
        <AboutComment />
      </div>
    </div>
  );
}
