"use client";

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import "@/app/globals.css";
import { skills } from "../constants";
import SectionWrapper from "@/HOC";
import { fadeIn, textVariant } from "../utils/motion";
import { StaticImageData } from "next/image";

const ServiceCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: StaticImageData;
}) => (
  <Tilt
    className="xs:w-[250px] w-full"
    options={{
      reverse: true,
      max: 45,
      scale: 1.1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn({
        direction: "right",
        type: "spring",
        delay: index * 0.5,
        duration: 1,
      })}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon.src}
          alt="web-development"
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
      <motion.div variants={textVariant(0.5)}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn({ direction: "", type: "", delay: 0.5, duration: 1 })}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Motivated and diligent Frontend Developer with proficiency in web design
        and development, UX design, and Chrome extension development. With a
        strong commitment to continuous learning and staying up-to-date with the
        latest industry trends, I have honed my skills in creating efficient and
        user-friendly interfaces. My portfolio showcases some personal projects
        that demonstrate my competency in frontend development. Eager to
        leverage my technical skills and drive for frontend development in a
        challenging role.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {skills.map((skill, index) => (
          <ServiceCard key={skill.title} index={index} {...skill} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
