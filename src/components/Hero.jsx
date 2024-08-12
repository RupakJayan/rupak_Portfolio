import React from 'react';
import HeroBg from '../assets/blue_bg.png'; // Adjust the path based on where the Hero component is located
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className={`$styles.paddingX} absolute inset-0 top-[120px]` }> 

      </div>
    </section>
  );
};

export default Hero;
