import React from "react";
import HeroVideo from "../assets/bg.mp4";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      " Web Developer 🕸️",
      " AI/ML Enthusiast 🤖",
      " I Love Exploring New Things! 🌟",
      " I Tinker with the Web ✌️!",
      " Innovator at Heart ❤️",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 1500,
  });

  return (
    <section className="relative w-full h-96">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content wrapper */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[1px] max-w-7xl mx-auto flex flex-col items-center justify-center gap-4`}
      >
        {/* Main heading */}
        <motion.h1
          className={`${styles.heroHeadText} text-center relative`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm Rupak Jayan. <br className="sm:block hidden" />
          <motion.span
            className="text-violet-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {text}
          </motion.span>
          <motion.span
            className="text-red-900"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Cursor cursorStyle=" <" />
          </motion.span>
        </motion.h1>
        
        {/* Subtitle */}
        <p className={`${styles.heroSubText} mt-2 text-white-100 text-center`}>
          I Develop User,
          <br className="sm:block hidden" />
          Interfaces and Web Applications
        </p>
      </div>

      {/* Fixed decorative elements */}
      <div className="fixed top-[40%] left-[5%] hidden lg:flex flex-col items-center transform -translate-y-1/2">
        <div className="w-8 h-8 rounded-full tropical-sunset" /> {/* Larger Rounded Ball */}
        <div className="w-1 h-80 tropical-sunset" /> {/* Longer Line */}
      </div>
      
      {/* Responsive decorative elements for small devices */}
      <div className="fixed top-[30%] left-[5%] flex flex-col items-center lg:hidden transform -translate-y-1/2">
        <div className="w-6 h-6 rounded-full tropical-sunset" /> {/* Smaller Rounded Ball */}
        <div className="w-0.5 h-40 tropical-sunset" /> {/* Shorter Line */}
      </div>
    </section>
  );
};

export default Hero;
