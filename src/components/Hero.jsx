import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HeroImage from "../assets/herobg.png"; // Ensure this path is correct
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "AI/ML Enthusiast",
      "I Love Exploring New Things!",
      "I Tinker with the Web!",
      "Innovator at Heart",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1200,
  });

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Content Wrapper */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Left Side - Decorative Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#3600e7dc]" />
          <div className="w-1 sm:h-80 h-40 peachy-sunrise" />
        </div>

        {/* Right Side - Text Content */}
        <div>
          <motion.h1
            className={`${styles.heroHeadText} text-white thin-text-head`}
            style={{ fontSize: "clamp(2rem, 5vw, 6rem)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="heroName">Rupak Jayan.</span>
          </motion.h1>

          <motion.span
            className={`${styles.heroSubText} mt-2 text-white-100 thin-text`}
            style={{ fontSize: "clamp(1rem, 3vw, 3rem)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {text} <Cursor cursorStyle=" <" />
          </motion.span>
        </div>
      </div>

      {/* 3D Canvas */}
      <ComputersCanvas />

      {/* Bouncing Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[60px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-2 shadow-md">
            <motion.div
              animate={{ y: [0, 24, 0], scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gray-400 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
