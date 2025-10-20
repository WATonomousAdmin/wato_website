import ContentPane from "../../components/ContentPane";
import Hero from "../../components/Hero";
import CTASection from "../../components/CTASection";

//TODO replace the images with desired images. Right now they are the same as the job postings
import imgpane00 from "../../public/imgs/projects/eve/eve-hero.jpg";
import imgpane01 from "../../public/imgs/projects/eve/foxglove.jpg";
import imgpane02 from "../../public/imgs/projects/eve/watocar.jpg";
import imgpane03 from "../../public/imgs/projects/eve/grinding.jpg";

//TODO add proper text/content
const PAGE_TITLE = "Eve Autonomy";
const HERO_TEXT = "WATonomous' flagship autonomous vehicle development platform, pushing the boundaries of self-driving technology through advanced perception, planning, and control systems.";

const PANE1_TITLE = "Full-Stack Autonomy";
const PANE1_SUBTITLE = "From Perception to Decision-Making";
const PANE1_CONTENT = `EVE represents the culmination of WATonomous' autonomous vehicle research, building on our second-place finish in the SAE AutoDrive Challenge. EVE is a heavily modified vehicle equipped with state-of-the-art sensors and computing hardware, designed to achieve Level 4 autonomous driving capabilities. EVE can handle complex urban environments, including traffic lights, pedestrians, cyclists, and construction zones.`;

const PANE2_TITLE = "Intersection Nightmare";
const PANE2_SUBTITLE = "Challenges Unique to Full-Scale Vehicles";
const PANE2_CONTENT = `Unlike tabletop robots, EVE must navigate complex intersections, interpret traffic signals, and predict unpredictable pedestrian behavior. How do you make life-or-death decisions in dense urban traffic with 2-ton inertia? How do you process massive LiDAR point clouds in real-time? WATonomous (WATO) Students tackle challenges unique to full-scale vehicles: dynamic construction zones, emergency braking with vehicle dynamics, and automotive safety standards. Every mistake has potentially catastrophic consequences - stakes that don't exist in smaller robotics.`;

const PANE3_TITLE = "Shaping Tomorrow's Roads";
const PANE3_SUBTITLE = "The Future of Urban Transportation";
const PANE3_CONTENT = `Working on EVE addresses key industries in autonomous transportation, logistics, and smart city infrastructure. Students develop skills directly applicable to ride-sharing companies, delivery services, and tech giants building tomorrow's transportation networks. The algorithms you build will power autonomous taxi fleets, guide delivery robots, and enable fully autonomous public transit. EVE provides hands-on experience with technologies that companies like Waymo, Aurora, and Nuro are deploying to transform urban mobility.`;

const Eve = () => {
  return (
    <>
      <Hero
        image={imgpane00}
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
        description="Be part of the future of autonomous vehicles"
        ctaText="Apply Here"
        ctaLink="/careers"
      />
    </>
  );
};

export default Eve;
