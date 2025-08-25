import { motion } from "framer-motion";

const FeatureList = ({ features, className = "" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}
    >
      {features &&
        features.map((feature, index) => (
          <motion.div
            key={`feature-${index}`}
            variants={itemVariants}
            className="flex items-center gap-4 md:gap-4"
          >
            <div className="bg-red-500 text-white font-Manrope-medium rounded-lg flex items-center justify-center text-[28px] md:text-5xl w-[49px] h-[48px] md:w-[80px] md:h-[80px] text-center">
              {(index + 1).toString().padStart(2, "0")}
            </div>

            <span className="text-custom-black font-Manrope-bold text-lg md:text-2xl leading-tight text-wrap">
              {feature}
            </span>
          </motion.div>
        ))}
    </motion.div>
  );
};

export default FeatureList;
