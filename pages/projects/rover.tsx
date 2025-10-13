import ContentPane from "../../components/ContentPane";
import Hero from "../../components/Hero";
import CTASection from "../../components/CTASection";

//TODO replace the images with desired images. Right now they are the same as the job postings
import imgpane01 from "../../public/imgs/projects/rover/uwrt.jpg";
import imgpane02 from "../../public/imgs/projects/rover/mars.jpg";
import imgpane03 from "../../public/imgs/projects/rover/rover.jpg";

const PAGE_TITLE = "Rover Autonomy";
const HERO_TEXT = "Building a world-class autonomous rover alongside UWRT to compete in the University Rover Challenge.";

const PANE1_TITLE = "Autonomous Mission";
const PANE1_SUBTITLE = "What is our goal at the URC?";
const PANE1_CONTENT = `Our goal is to develop a fully autonomous rover that can explore unknown environments by using sensors to perceive its surroundings, localize itself, build maps, and identify science targets. It plans safe, efficient paths, avoids obstacles, and continuously adapts its decisions in real time to successfully navigate and complete mission objectives without human intervention.`;

const PANE2_TITLE = "A Natural Environment";
const PANE2_SUBTITLE = "How do we ensure reliable autonomous traversal in a changing environment?";
const PANE2_CONTENT = `Our autonomy team tackles the challenges of navigating a dynamic desert environment and detecting low-contrast targets. Shifting sand, rocks, and uneven terrain require the rover to constantly update its maps and adjust its path, while orange science objects blending into the desert floor make reliable detection difficult. To overcome these, we combine robust perception, localization, and planning systems that allow the rover to adapt in real time and make safe, efficient decisions in unpredictable conditions.`;

const PANE3_TITLE = "Our Impact";
const PANE3_SUBTITLE = "How do we advance the research in Mars Exploration?";
const PANE3_CONTENT = `Our work pushes the boundaries of autonomous navigation by developing systems that can handle unpredictable, real-world environments. The solutions we design for perception, mapping, and decision-making not only enable our rover to succeed in the URC but also contribute to technologies that advance planetary exploration, disaster response, and autonomous robotics in challenging conditions here on Earth.`;

const Humanoid = () => {
  return (
    <>
      <Hero
        // image={imgpane00} //TODO change the image source in tailwind config
        title={PAGE_TITLE}
        subtitle={HERO_TEXT}
        cta={"See More"}
        link={"#info"}
        fixed
      />
      <ContentPane
        title={PANE1_TITLE}
        subtitle={PANE1_SUBTITLE}
        img={imgpane01}
        leftOriented={true}
      >
        {PANE1_CONTENT}
      </ContentPane>

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
        description="Join the next generation of Mars explorers"
        ctaText="Apply Here"
        ctaLink="/careers"
      />
    </>
  );
};

export default Humanoid;
