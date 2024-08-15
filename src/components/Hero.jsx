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
        className={`${styles.paddingX} absolute inset-20 max-w-7xl mx-auto flex flex-col items-center gap-4`}
      >
        {/* Main heading */}
        <motion.h1
          className={`${styles.heroHeadText} text-center relative thin-text-head`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm Rupak Jayan. <br className="sm:block hidden" />
        </motion.h1>
        <motion.span
          className={`${styles.heroSubText} text-center relative thin-text`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {text}
          <motion.span
            style={{ color: 'orange' }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Cursor cursorStyle=" 👈" />
          </motion.span>
        </motion.span>
      </div>
    </section>
  );
};

export default Hero;
