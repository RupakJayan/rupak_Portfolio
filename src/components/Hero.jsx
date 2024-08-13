import React from "react";
import HeroVideo from "../assets/bg.mp4"; // Adjust the path based on where the Hero component is located
import { motion } from "framer-motion";
import { styles } from "../styles"; // Import your custom styles
import { useTypewriter, Cursor } from "react-simple-typewriter"; // Import TypewriterEffect

const Hero = () => {
  const [text] = useTypewriter({
    words: [' Web Developer', ' AIML Enthusiast', ' Creative Technologist'],
    loop: true, // Ensure loop is set to true for continuous effect
    typeSpeed: 100, // Adjust type speed as needed
    deleteSpeed: 100, // Adjust delete speed as needed
    delaySpeed: 1500, // Adjust delay between words as needed
  });

  return (
    <section className="relative w-full h-screen mx-auto">
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
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-8 h-8 rounded-full bg-[#170e47] mb-4 tropical-sunset" /> {/* Rounded Ball */}
          <div className="w-1 h-80 bg-gradient-to-r from-[#b5f73a] via-[#dd8c56] to-[#fca2e8] tropical-sunset" /> {/* Line */}
        </div>
        <motion.h1 
          className={`${styles.heroHeadText}`} 
          style={{ margin: '70px' }}
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Hi, I'm Rupak Jayan , 
          <motion.span 
            className="text-green-500 font-bold"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1 }}
          >
            {text}
          </motion.span>
          <motion.span 
            className="text-red-500"
            initial={{ opacity: 0, x: -10 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 1 }}
          >
            <Cursor cursorStyle='_' />
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
