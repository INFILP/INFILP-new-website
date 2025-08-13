import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="h-screen flex items-center">
      <div className="max-w-7xl mx-auto text-center ">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-[64px] font-BebasNeue-regular text-custom-black mb-12 leading-[150%] px-8 md:px-0"
        >
          WORKING WITH US IS LIKE HAVING A DEPARTMENT <br /> OF{" "}
          <span className="text-prime font-BebasNeue-regular">
            EXPERTS ON YOUR TEAM.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-3 gap-14 md:gap-12 px-6 md:px-0"
        >
          {/* Years Experience */}
          <div className="text-center">
            <div className="text-[26px] md:text-4xl font-Manrope-bold text-custom-black mb-2">
              {isInView && (
                <CountUp start={0} end={3} duration={2} suffix="+" />
              )}
            </div>
            <p className="text-tertiary text-sm md:text-lg font-Manrope-medium">
              Years Experience
            </p>
          </div>

          <div className="text-center">
            <div className="text-[26px] md:text-4xl font-Manrope-bold text-custom-black mb-2">
              {isInView && (
                <CountUp start={0} end={250} duration={2.5} suffix="+" />
              )}
            </div>
            <p className="text-tertiary text-sm md:text-lg font-Manrope-medium">
              Apps Delivered
            </p>
          </div>

          <div className="text-center">
            <div className="text-[26px] md:text-4xl font-Manrope-bold text-custom-black mb-2">
              {isInView && (
                <CountUp start={0} end={100} duration={2.2} suffix="+" />
              )}
            </div>
            <p className="text-tertiary text-sm md:text-lg font-Manrope-medium">
              Happy Clients
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
