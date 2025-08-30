'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AISection = ({
  imageSrc = '/images/generativeAi.webp',
  imageAlt = 'Custom Generative AI',
  highlightText,
  mainText,
  className = '',
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.4,
      },
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: 'easeInOut',
      },
    },
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.section
      className={`pt-16 px-4 md:pt-8 lg:pt-14 bg-white ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}>
      <div className="max-w-6xl mx-auto">
        <motion.div className="" variants={imageVariants}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={400}
            priority
            className="object-cover w-full max-w-[1079px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[621px] mx-auto rounded-2xl shadow-2xl"
          />
        </motion.div>

        <motion.div
          className="text-center max-w-4xl mx-auto mt-44"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}>
          <p className="text-[32px] md:text-[44px] font-BebasNeue-regular text-[#200100] leading-[150%] md:leading-[120%]">
            <span className="inline">WE'RE A </span>
            <span className="text-red-500">{highlightText}</span>
            <span className="inline"> {mainText}</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AISection
