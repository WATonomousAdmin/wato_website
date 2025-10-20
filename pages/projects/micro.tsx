import ContentPane from "../../components/ContentPane";
import Hero from "../../components/Hero";
import CTASection from "../../components/CTASection";

import imgpane01 from "../../public/imgs/projects/micro/car.jpg";
import imgpane02 from "../../public/imgs/projects/micro/foxglove.jpg";
import imgpane03 from "../../public/imgs/projects/micro/race_line.jpg";

const PAGE_TITLE = "Micro Autonomy";
const HERO_TEXT = "Build and race 1:10 scale autonomous vehicles in head-to-head competition. Master real-time perception, planning, and control as you compete at international conferences and develop skills that power the future of autonomous systems.";

const PANE1_TITLE = "Race at the Speed of Innovation";
const PANE1_SUBTITLE = "Build Complete Autonomous Systems";
const PANE1_CONTENT = `F1Tenth is where you'll build real autonomous racing systems from the ground up. You'll integrate perception, localization, planning, and control into a seamless racing machine. Watch your algorithms fuse LiDAR and IMU data, detect opponents in real-time, generate split-second trajectories, and execute precise control commands—all at racing speeds. This is hands-on autonomy where you see your code compete on the track immediately.`;

const PANE2_TITLE = "Push Your Limits";
const PANE2_SUBTITLE = "Solve Problems That Matter in Autonomous Racing";
const PANE2_CONTENT = `This isn't textbook robotics—it's competitive racing where the track changes mid-race and opponents force you to adapt instantly. You'll tackle the hardest problems in autonomous navigation: How do you localize when your map becomes outdated? When do you risk an overtake at maximum speed? How do you plan aggressive trajectories on limited computing power without crashing? Every decision tests your algorithms under pressure. Crashes are part of the learning process, and every race pushes you to build smarter, faster systems.`;

const PANE3_TITLE = "Race Globally, Build Your Future";
const PANE3_SUBTITLE = "From Campus to International Competitions";
const PANE3_CONTENT = `F1Tenth gives you what full-scale vehicles can't—rapid iteration, aggressive testing, and the freedom to fail fast and learn faster. Deploy your algorithms in minutes, not months. Test ideas that would be too risky or expensive on real cars. Compete at premier international conferences like IROS and ICRA, meeting top researchers and teams from around the world. The skills you build—real-time perception, motion planning, control under constraints—are exactly what companies like Waymo, Aurora, and Tesla need. Whether you're heading to grad school or industry, F1Tenth puts you on the starting grid for a career in autonomous systems.`;

const Micro = () => {
  return (
    <>
      <Hero
        video="/imgs/projects/micro/demo.mp4"
        title={PAGE_TITLE}
        subtitle={HERO_TEXT}
        cta={"See More"}
        link={"#info"}
        fixed
      />
      <div id="info">
        <ContentPane
          title={PANE1_TITLE}
          subtitle={PANE1_SUBTITLE}
          img={imgpane01}
          leftOriented={true}
        >
          {PANE1_CONTENT}
        </ContentPane>
      </div>

      <ContentPane
        title={PANE2_TITLE}
        subtitle={PANE2_SUBTITLE}
        img={imgpane02}
        leftOriented={false}
      >
        {PANE2_CONTENT}
      </ContentPane>

      <ContentPane
        title={PANE3_TITLE}
        subtitle={PANE3_SUBTITLE}
        img={imgpane03}
        leftOriented={true}
      >
        {PANE3_CONTENT}
      </ContentPane>

      <CTASection
        title="Interested in joining?"
        description="Race with us at international competitions"
        ctaText="Apply Here"
        ctaLink="/careers"
      />
    </>
  );
};

export default Micro;
