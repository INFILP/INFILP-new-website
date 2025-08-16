"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQs = ({
  title = "FAQs",
  faqs = [
    {
      id: 1,
      question: "What industries do you work with?",
      answer:
        "We work with a wide range of industries including healthcare, finance, e-commerce, education, and technology. Our team has experience adapting AI solutions to meet the specific needs and regulatory requirements of different sectors.",
    },
    {
      id: 2,
      question: "Do you offer end-to-end development?",
      answer:
        "Yes, we provide comprehensive end-to-end development services from initial strategy and planning to deployment and ongoing maintenance. Our team handles everything from UI/UX design to backend development and AI integration.",
    },
    {
      id: 3,
      question: "Can you scale products as we grow?",
      answer:
        "Absolutely! We build scalable solutions from the ground up, ensuring your product can handle increased traffic, users, and data as your business grows. We use modern cloud infrastructure and best practices for scalability.",
    },
    {
      id: 4,
      question: "What AI services do you provide?",
      answer:
        "We offer a full range of AI services including natural language processing, machine learning model development, computer vision, chatbot development, predictive analytics, and custom AI tool creation tailored to your specific business needs.",
    },
    {
      id: 5,
      question: "How do you ensure quality?",
      answer:
        "Through detail-obsessed design, code reviews, and ongoing performance monitoring.",
    },
  ],
  className = "",
}) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const faqVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const answerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        opacity: { duration: 0.3, delay: 0.1 },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeIn",
        opacity: { duration: 0.2 },
      },
    },
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <motion.section
      className={`pt-16 px-4 md:pt-24 lg:pt-48 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <motion.div className="text-center mb-16" variants={titleVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-Manrope-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-36 h-1 bg-red-500 mx-auto"></div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 ">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className="bg-[#F8FAFB] rounded-lg shadow-sm overflow-hidden"
              variants={faqVariants}
            >
              {/* Question */}
              <motion.button
                className={`w-full px-6 py-5 text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
                  openFaq === faq.id
                    ? "bg-[#2b2b2b] text-white hover:bg-[#2b2b2b]"
                    : "bg-[#F8FAFB] text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => toggleFaq(faq.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="text-base md:text-2xl font-Manrope-medium pr-4">
                  {faq.question}
                </span>
                <motion.div
                  variants={iconVariants}
                  animate={openFaq === faq.id ? "open" : "closed"}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 ${
                      openFaq === faq.id ? "text-white" : "text-gray-600"
                    }`}
                  />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence mode="wait">
                {openFaq === faq.id && (
                  <motion.div
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 bg-[#2b2b2b] text-[#F7F7F7]">
                      <p className="text-sm md:text-base font-Manrope-regular leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQs;
