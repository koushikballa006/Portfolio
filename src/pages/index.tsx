// pages/index.tsx
import React, { useRef } from 'react';
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import About from "@/components/about";
import Technologies from "@/components/Technologies";
import Projects from "@/pages/Projects"; // Import the Projects component
import { motion, useInView } from "framer-motion";

const IndexPage: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null); // New ref for Projects

  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.1 });
  const isTechInView = useInView(techRef, { once: true, amount: 0.1 });
  const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.1 }); // New useInView for Projects

  return (
    <DefaultLayout>
      <section className="flex flex-col items-start justify-center gap-4 py-16 px-4 md:py-32 md:px-10">
        <div className="max-w-4xl text-left">
          <h1 className={`${title()} font-bold leading-tight`} style={{ fontSize: "5rem" }}>
            Hi, I'm&nbsp;
          </h1>
          <h1 className={`${title({ color: "violet" })} font-bold leading-tight`} style={{ fontSize: "5rem" }}>
            Koushik Balla
          </h1>
          <br />
          <h1 className={`${title()} font-bold leading-tight`} style={{ fontSize: "5rem" }}>
            a passionate&nbsp;
          </h1>
          <h1 className={`${title({ color: "violet" })} font-bold leading-tight`} style={{ fontSize: "5rem" }}>
            Web Developer
          </h1>
        </div>
      </section>
      
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <About />
      </motion.div>
      
      <motion.div
        ref={techRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isTechInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <Technologies />
      </motion.div>

      {/* New Projects section */}
      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <Projects />
      </motion.div>
    </DefaultLayout>
  );
};

export default IndexPage;