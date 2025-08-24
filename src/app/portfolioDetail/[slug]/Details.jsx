import { motion } from "framer-motion";

const Details = ({
  title,
  description,
  year,
  projectType,
  industry,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.25, 0, 1],
      }}
      className="max-w-[1240px] mx-auto py-16 px-6"
    >
      {/* Header Section */}
      <div className="mb-12">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "48px" }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          className="h-1 bg-red-500 mb-6"
        />
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
            className="text-2xl md:text-5xl font-Manrope-bold text-custom-black mb-2 text-center md:text-left"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: delay + 0.4 }}
            className="h-1 bg-red-500 mx-auto md:mx-0"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
          className="text-gray-600 leading-relaxed font-Manrope-regular text-base md:text-2xl max-w-7xl text-center md:text-left"
        >
          {description}
        </motion.p>
      </div>

      {/* Details Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.5 }}
        className="flex flex-col md:flex-row gap-16 bg-[#F8FAFB] px-6 py-8 max-w-[1240px] mx-auto justify-center items-center md:justify-between rounded-2xl"
      >
        <div className="text-center md:text-left">
          <h3 className="text-base md:text-2xl font-Manrope-medium text-custom-black mb-3 ">
            Year
          </h3>
          <p className="text-lg md:text-[28px] font-Manrope-bold text-custom-black">
            {year}
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-base md:text-2xl font-Manrope-medium text-custom-black mb-3">
            Project Type
          </h3>
          <p className="text-lg md:text-[28px] font-Manrope-bold text-custom-black">
            {projectType}
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-base md:text-2xl font-Manrope-medium text-custom-black mb-3">
            Industry
          </h3>
          <p className="text-lg md:text-[28px] font-Manrope-bold text-custom-black">
            {industry}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Details;
