import { features } from "../constants";
import styles from "../style";
import AdvantageCard from "./AdvantageCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.smallPaddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
      {features.map((card) => <AdvantageCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;