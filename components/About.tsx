'use client'

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import "@/app/globals.css";
import { services } from "../constants";
import SectionWrapper from "@/HOC";
import { fadeIn, textVariant } from "../utils/motion";
import { StaticImageData } from "next/image";

const ServiceCard = ({ index, title, icon }: { index: number, title: string, icon: StaticImageData }) => (
  <Tilt className='xs:w-[250px] w-full'
    options={{
      reverse: true,
      max: 45,
      scale: 1.1,
      speed: 450,
    }}>
    <motion.div
      variants={fadeIn({ direction: 'right', type: 'spring', delay: index * 0.5, duration: 1 })}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon.src}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0.5)}
      >
        <p className='sectionSubText'>Introduction</p>
        <h2 className='sectionHeadText'>Overview.</h2>
      </motion.div >

      <motion.p
        variants={fadeIn({ direction: '', type: '', delay: 0.5, duration: 1 })}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");