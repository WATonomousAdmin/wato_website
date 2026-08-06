import Head from "next/head";
import Image from "next/image";
import ContentPane from "../../components/ContentPane";
import Hero from "../../components/Hero";
import CTASection from "../../components/CTASection";

import imgpane01 from "../../public/imgs/projects/humanoid/dual_arm_hero.png";
import imgpane02 from "../../public/imgs/projects/humanoid/leg_cad.png";
import imgpane03 from "../../public/imgs/projects/humanoid/hand_22dof.jpg";
import imgpane04 from "../../public/imgs/projects/humanoid/dual_arm_bench.jpg";
import imgpane05 from "../../public/imgs/projects/humanoid/hand_22dof_2.jpg";
import imgpane06 from "../../public/imgs/projects/humanoid/leg_cad_2.png";
import imgpane07 from "../../public/imgs/projects/humanoid/leg_cad_3.png";
import imgpane08 from "../../public/imgs/projects/humanoid/leg_cad_4.png";

const PAGE_TITLE = "Humanoid Autonomy";
const HERO_TEXT = "A fully custom bipedal humanoid platform, built in-house from actuators to autonomy stack, bringing human-like mobility and dexterity to real-world environments.";
const DOCS_LINK = "https://watonomous.github.io/humanoid-docs/index.html";

const PROGRESS_TITLE = "Progress in Motion";
const PROGRESS_SUBTITLE = "Build Highlights, Straight from the Lab";
const PROGRESS_CONTENT = `A look at the platform coming together: hardware bring-up, actuator testing, and the humanoid taking shape one iteration at a time.`;

const PANE1_TITLE = "Human-Like Robotics";
const PANE1_SUBTITLE = "From Design to Behaviour";
const PANE1_CONTENT = `Our dual-arm humanoid platform integrates perception, planning, and control to walk, balance, and manipulate objects using human-inspired mobility. Jacobian-based inverse kinematics with damped least squares drives both end effectors to target poses in real time, letting the robot react dynamically to its environment rather than follow scripted trajectories.`;

const PANE2_TITLE = "Full-Custom Design";
const PANE2_SUBTITLE = "Building from the Ground Up";
const PANE2_CONTENT = `Every joint is designed and built in-house. Each leg uses a 6 DOF Flexion-Abduction-Rotation hip configuration for compact, biomimetic packaging, paired with custom motor selection per joint. Full control over the mechanical design lets us tailor hardware to software needs and iterate quickly on balance, agility, and autonomy.`;

const PANE3_TITLE = "22 DOF Hand";
const PANE3_SUBTITLE = "Dexterous Manipulation Hardware";
const PANE3_CONTENT = `Our in-house hand packs 22 degrees of freedom, 16 actuated, into a human-sized form factor. It's the manipulation endpoint for both teleoperation and learned control: precise enough for fine motor tasks, durable enough for daily testing and iteration.`;

const PANE4_TITLE = "VR Teleoperation";
const PANE4_SUBTITLE = "Human Demonstrations, Robot Actions";
const PANE4_CONTENT = `A Quest headset streams wrist and hand-tracking data over WebXR to a ROS 2 bridge, which drives a per-arm differential IK controller in Isaac Sim (and on hardware, gated behind an e-stop). Pinch gestures control the gripper, giving us a direct pipeline for collecting demonstration data.`;

const PANE5_TITLE = "Learning to Manipulate";
const PANE5_SUBTITLE = "From Demonstrations to Policies";
const PANE5_CONTENT = `Reinforcement learning trains in-hand manipulation, like cube reorientation, on the 16 DOF hand in Isaac Lab using PPO with dense rotation-tracking rewards. In parallel, we're building toward end-to-end pixel-to-action control by pairing teleoperated demonstrations with imitation learning, VLA fine-tuning, and distillation into deployable policies.`;

const PANE6_TITLE = "Bipedal Locomotion";
const PANE6_SUBTITLE = "Custom Leg, Iterated in CAD";
const PANE6_CONTENT = `Each 6 DOF leg is modeled, analyzed, and refined entirely in-house before a single part is machined, from actuator sizing at the hip and knee down to ankle roll. This tight CAD-to-hardware loop lets us validate range of motion and structural margins before committing to the physical build.`;
const Humanoid = () => {
  return (
    <>
      <Head>
        <title>UWaterloo's First Humanoid Robot - Pioneer | WATonomous</title>
        <meta
          name="description"
          content="Pioneer is UWaterloo's first humanoid robot, built by WATonomous - 22 DOF hand, bimanual arm, and 12 DOF legs."
        />
      </Head>
      <Hero
        // image={imgpane00} //TODO change the image source in tailwind config
        title={PAGE_TITLE}
        subtitle={HERO_TEXT}
        cta={"See More"}
        link={"#info"}
        secondaryCta={"Visit Our Documentation ↗"}
        secondaryLink={DOCS_LINK}
        fixed
      />
      <div id="info">
        <div className="relative flex flex-col items-center bg-black bg-opacity-90 py-32 lg:bg-opacity-80">
          <div className="relative z-10 flex w-full max-w-[95rem] flex-col items-center px-8 text-center text-white md:px-16 lg:w-[85vw] lg:px-0">
            <div className="text-3xl font-black lg:text-4xl">
              {PROGRESS_TITLE}&nbsp;<span className="text-wato-teal">{"//"}</span>
            </div>
            <div className="mb-6 mt-2 text-base italic text-wato-teal lg:text-lg">
              {PROGRESS_SUBTITLE}
            </div>
            <p className="mb-8 max-w-3xl text-sm lg:text-base">{PROGRESS_CONTENT}</p>
            <video
              controls
              playsInline
              className="w-full max-w-4xl rounded-md"
            >
              <source src="/imgs/projects/humanoid/humanoid_progress.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

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

      <ContentPane
        title={PANE4_TITLE}
        subtitle={PANE4_SUBTITLE}
        img={imgpane04}
        leftOriented={false}
      >
        {PANE4_CONTENT}
      </ContentPane>

      <ContentPane
        title={PANE5_TITLE}
        subtitle={PANE5_SUBTITLE}
        img={imgpane05}
        leftOriented={true}
      >
        {PANE5_CONTENT}
      </ContentPane>

      <ContentPane
        title={PANE6_TITLE}
        subtitle={PANE6_SUBTITLE}
        img={imgpane06}
        leftOriented={false}
      >
        {PANE6_CONTENT}
      </ContentPane>

      <div className="grid grid-cols-2 gap-4 bg-black bg-opacity-90 px-8 pb-32 md:px-16 lg:mx-auto lg:w-[85vw] lg:px-0">
        <Image alt="Humanoid leg CAD render, wireframe view" src={imgpane07} className="rounded-md" />
        <Image alt="Humanoid leg CAD render, line art view" src={imgpane08} className="rounded-md" />
      </div>

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
