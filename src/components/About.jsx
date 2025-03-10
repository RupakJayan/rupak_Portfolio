import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full ">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1)}
      className="bg-custom-dark green-pink-gradient p-[1px] rounded-[20px] shadow-card transition-transform transform hover:scale-105 hover:shadow-glow" // Apply gold glow effect here
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 1000,
        }}
        className="bg-custom-dark rounded-[20px] py-5 px-12 min-h-[140px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in Java, Python, C/C++, SQL, and JavaScript, specializing in frameworks like React, Node.js, Django, and Flask. I have a strong background in full-stack development, cryptography, and AI/ML applications. I'm a quick learner who collaborates closely with clients to build scalable, secure, and user-friendly solutions. Let's work together to bring your ideas to life!

      </motion.p>

      <div className="mt-20 grid grid-cols-2 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
