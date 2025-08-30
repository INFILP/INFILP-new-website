'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const HighlightItem = ({ number, text, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    threshold: 0.3,
    once: true,
    margin: '0px 0px -50px 0px',
  })

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  }

  const numberVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1 + 0.2,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="flex items-center gap-4 group">
      <motion.div
        variants={numberVariants}
        className="flex-shrink-0 w-12 h-12 md:w-20 md:h-20 bg-red-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
        <span className="text-white font-Manrope-bold text-[28px] md:text-[48px]">
          {number}
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.3,
          ease: 'easeOut',
        }}
        className="text-[#200100] font-Manrope-bold text-lg md:text-[32px] leading-relaxed">
        {text}
      </motion.p>
    </motion.div>
  )
}

const WhatAreWe = () => {
  const headerRef = useRef(null)
  const subtitleRef = useRef(null)
  const footerRef = useRef(null)

  const isHeaderInView = useInView(headerRef, {
    threshold: 0.3,
    once: true,
  })

  const isSubtitleInView = useInView(subtitleRef, {
    threshold: 0.3,
    once: true,
  })

  const isFooterInView = useInView(footerRef, {
    threshold: 0.3,
    once: true,
  })

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: '4rem',
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  }

  const footerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const highlights = [
    'Write your highlight here',
    'Write your highlight here',
    'Write your highlight here',
    'Write your highlight here',
    'Write your highlight here',
    'Write your highlight here',
  ]

  return (
    <section className="pt-24 md:pt-32 px-8 ">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={isHeaderInView ? 'visible' : 'hidden'}
          className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-Manrope-regular text-gray-900 mb-4">
            What Are <span className="font-Manrope-bold">We</span>
          </h2>
          <motion.div
            variants={underlineVariants}
            initial="hidden"
            animate={isHeaderInView ? 'visible' : 'hidden'}
            className="h-1 bg-red-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          ref={subtitleRef}
          variants={subtitleVariants}
          initial="hidden"
          animate={isSubtitleInView ? 'visible' : 'hidden'}
          className="text-center mb-4">
          <p className="text-tertiary font-Manrope-medium text-base md:text-2xl leading-relaxed">
            A 4 year old agency with team members who've been with us for over
            years
          </p>
        </motion.div>

        {/* Highlights Label */}
        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate={isSubtitleInView ? 'visible' : 'hidden'}
          className="text-center mb-12">
          <p className="text-tertiary font-Manrope-medium text-base md:text-2xl">
            Some INFILR highlights:
          </p>
        </motion.div>

        {/* Highlights List */}
        <div className="space-y-6 mb-12">
          {highlights.map((highlight, index) => (
            <HighlightItem
              key={index}
              number={index + 1}
              text={highlight}
              index={index}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          ref={footerRef}
          variants={footerVariants}
          initial="hidden"
          animate={isFooterInView ? 'visible' : 'hidden'}
          className="text-center">
          <p className="text-tertiary font-Manrope-bold text-sm md:text-2xl ">
            & we are just getting started...
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatAreWe
