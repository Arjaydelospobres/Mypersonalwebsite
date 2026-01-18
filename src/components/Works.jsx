import React from "react";
import { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleClick = () => {
    if (live_link) {
      window.open(live_link);
    } else {
      window.open(source_code_link);
    }
  };

  const mouseEnter = () => {
    setShowInfo(true);
  };

  const mouseLeave = () => {
    setShowInfo(false);
  };
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 500,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div
        onClick={handleClick}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className="relative w-full h-[210px] cursor-pointer"
      >
        {showInfo && (
          <div className="absolute top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
            <div className="info-container">
              {live_link ? (
                <h2 className="text-white text-lg font-semibold border border-white p-4 rounded-lg">
                  Click To View Live Demo
                </h2>
              ) : (
                <h2 className="text-white text-lg font-semibold border border-white p-4 rounded-lg">
                  Click To View Source Code
                </h2>
              )}
              <div className="arrow"></div>
            </div>
          </div>
        )}
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
        {live_link ? (
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
      <p className={`${styles.sectionSubText} `}>My work</p>
      <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      {/* </motion.div> */}

      <div className="w-full flex">
        {/* <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 text-secondary text-[17px] max-w-4xl leading-[30px]"
        > */}
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
        {/* </motion.p> */}
      </div>

      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
