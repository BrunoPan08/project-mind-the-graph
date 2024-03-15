import { featuresModal } from "../constants";
import styles from "../style";
import FeatureCard from "./FeatureCard";

const Feature = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.smallPadding} sm:flex-col flex-col bg-purple rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} font-lato text-center`}>Create effective science figures in minutes</h2>
      <p className={`${styles.paragraph} font-lato text-center text-white mt-5 mx-[70px]`}>
      We built Mind the Graph for simplicity. The platform is easy to use and just about anybody can use it to create great infographics and presentations - from beginners to professionals, individuals to groups and small labs to large organisations
      </p>
    </div>
    <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
      {featuresModal.map((card) => <FeatureCard key={card.id} {...card} />)}
    </div>
    <button type="button" className={`font-lato py-4 px-6 font-medium text-[18px] text-primary bg-rectangle-empty rounded-[10px] outline-none mb-[30px]`}>
      EXPLORE MIND THE GRAPH
    </button>
  </section>
);

export default Feature;