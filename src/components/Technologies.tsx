// components/Technologies.tsx
import React from 'react';
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiMysql } from 'react-icons/si';

const technologies = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> }
];

const Technologies: React.FC = () => {
  return (
    <section className="py-16 px-4 md:py-32 md:px-10">
      <h2 className="text-4xl font-bold mb-8 text-center">Technologies I Work With</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="bg-violet-600 text-white px-4 py-2 rounded-full flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="mr-2 text-xl">{tech.icon}</span>
            <span>{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
