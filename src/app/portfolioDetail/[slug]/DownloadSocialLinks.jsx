import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Youtube,
  MessageCircle,
  Github,
  Music,
  Camera,
  PlayCircle,
  MessageSquare,
  Phone,
} from "lucide-react";
import Image from "next/image";

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
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const buttonHover = {
  scale: 1.03,
  transition: { duration: 0.15, ease: "easeOut" },
};

const iconHover = {
  scale: 1.1,
  transition: { duration: 0.2, ease: "easeInOut" },
};

const socialIconHover = {
  scale: 1.1,
  y: -1,
  transition: { duration: 0.15, ease: "easeOut" },
};

const socialIcons = [
  { key: "instagram", Icon: Instagram },
  { key: "facebook", Icon: Facebook },
  { key: "twitter", Icon: Twitter },
  { key: "linkedin", Icon: Linkedin },
  {
    key: "tiktok",
    Icon: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
      </svg>
    ),
  },
  { key: "website", Icon: Globe },
  { key: "youtube", Icon: Youtube },
  { key: "whatsapp", Icon: MessageCircle },
  { key: "github", Icon: Github },
  { key: "snapchat", Icon: Camera },
  { key: "twitch", Icon: PlayCircle },
  { key: "discord", Icon: MessageSquare },
  { key: "telegram", Icon: Phone },
  { key: "pinterest", Icon: Camera },
  { key: "reddit", Icon: MessageCircle },
  { key: "tumblr", Icon: Globe },
];

const DownloadSocialLinks = ({
  downloadLinks = {
    playStore: "#",
    appStore: "#",
  },
  socialLinks = {
    instagram: "#",
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },
  socialLinksArray,
  className = "",
}) => {
  const processedSocialLinks = socialLinksArray
    ? Object.fromEntries(socialLinksArray.map((link) => [link.name, link.url]))
    : socialLinks;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-col lg:flex-row justify-between ${className}`}
    >
      <motion.div
        variants={itemVariants}
        className="space-y-12 w-full py-12 px-6 bg-[#F8FAFB]  rounded-4xl lg:mr-4"
      >
        <h2 className="text-4xl lg:text-5xl font-Manrope-regular text-custom-black text-center">
          Get the <span className="font-semibold">app</span>
        </h2>

        <div className="flex flex-row items-center justify-center gap-4">
          <motion.a
            href={downloadLinks.playStore}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-lg font-Manrope-medium hover:bg-gray-800 transition-colors max-w-[220px] h-[70px] text-[14px] sm:text-base md:text-[24px] whitespace-nowrap"
          >
            <motion.div whileHover={iconHover}>
              <Image
                src="/images/playstore.png"
                width={30}
                height={30}
                alt="Play Store"
                className="object-contain w-[26px]"
              />
            </motion.div>
            Play Store
          </motion.a>

          {/* App Store Button */}
          <motion.a
            href={downloadLinks.appStore}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-lg font-Manrope-medium hover:bg-gray-800 transition-colors max-w-[220px] h-[70px] text-[14px] sm:text-base md:text-[24px] whitespace-nowrap"
          >
            <motion.div whileHover={iconHover}>
              <Image
                src="/images/apple.png"
                width={30}
                height={30}
                alt="App Store"
                className="object-contain w-[26px]"
              />
            </motion.div>
            App Store
          </motion.a>
        </div>
      </motion.div>

      {/* Social Section */}
      <motion.div
        variants={itemVariants}
        className="space-y-12 w-full py-12 px-6 mt-6 lg:mt-0 bg-[#F8FAFB]  lg:ml-4 rounded-4xl flex flex-col items-center justify-center text-[16px] md:text-[24px]"
      >
        <h2 className="text-4xl lg:text-5xl font-Manrope-regular text-custom-black text-center lg:text-left ">
          Join the <span className="font-semibold">Community</span>
        </h2>

        <div className="flex gap-3 justify-center">
          {socialIcons
            .filter(({ key }) => processedSocialLinks[key])
            .map(({ key, Icon }) => (
              <motion.a
                key={key}
                href={processedSocialLinks[key]}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={socialIconHover}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                aria-label={key}
              >
                <Icon size={24} />
              </motion.a>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DownloadSocialLinks;
