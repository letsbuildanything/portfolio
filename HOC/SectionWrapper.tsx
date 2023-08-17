import { motion } from "framer-motion";

import "@/app/globals.css";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`padding max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;