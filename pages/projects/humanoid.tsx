import ContentPane from "../../components/ContentPane";
import Hero from "../../components/Hero";
import CTASection from "../../components/CTASection";

import imgpane01 from "../../public/imgs/projects/humanoid/finger.jpg";
import imgpane02 from "../../public/imgs/projects/humanoid/humans.jpg";
import imgpane03 from "../../public/imgs/projects/humanoid/hand_banana.jpg";

const PAGE_TITLE = "Humanoid Autonomy";
const HERO_TEXT = "Developing with UWRL bipedal autonomous robots that bring human-like mobility and dexterity to real-world environments through advanced perception, planning, and control systems.";

const PANE1_TITLE = "Human-Like Robotics";
const PANE1_SUBTITLE = "From Design to Behaviour";
const PANE1_CONTENT = `Our humanoid autonomy platform focuses on developing robots that walk, balance, and interact with their environment using human-inspired mobility. By integrating advanced perception, planning, and control systems, the robot can understand its surroundings, make intelligent movement decisions, and react dynamically to unpredictable situations. From navigating uneven terrain to manipulating objects, the project bridges the gap between research and real-world operation, bringing human-like agility to robotic systems.`;

const PANE2_TITLE = "Full-Custom Design";
const PANE2_SUBTITLE = "Building from the Ground Up";
const PANE2_CONTENT = `Unlike most humanoid platforms that rely on commercial components, our robot is designed and built entirely in-house, from mechanical architecture to actuator systems. Every joint, linkage, and sensor mount is optimized for strength, weight, and mobility. This full-custom design allows us to tailor hardware to software needs, experiment with novel actuation methods, iterate rapidly, and gain a deep understanding of how design decisions affect balance, agility, and autonomy.`;

const PANE3_TITLE = "Complete System Autonomy";
const PANE3_SUBTITLE = "From Hardware to Intelligence";
const PANE3_CONTENT = `We maintain full control of the robot’s design, mechanical, electrical, and software, enabling a uniquely integrated approach to autonomy. This vertical integration means every subsystem, from the actuator torque curves to the high-level motion planner, works cohesively. Such control allows us to optimize communication between sensors, processors, and controllers for real-time performance, create custom embedded systems and motor drivers tailored to our walking and manipulation needs, and develop perception and control algorithms that exploit the robot’s exact physical model. The result is a platform that evolves as a unified system, an ideal testbed for research in locomotion, manipulation, and embodied intelligence.`;
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
        description="Help build the future of humanoid robotics"
        ctaText="Apply Here"
        ctaLink="/careers"
      />
    </>
  );
};

export default Humanoid;
