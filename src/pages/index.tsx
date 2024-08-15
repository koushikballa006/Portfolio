import React, { useRef, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import DefaultLayout from "@/layouts/default";
import About from "@/components/about";
import Technologies from "@/components/Technologies";
import Projects from "@/pages/Projects";
import HeaderSection from "@/components/HeaderSection";
import { motion, useInView } from "framer-motion";

const IndexPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.1 });
  const isTechInView = useInView(techRef, { once: true, amount: 0.1 });
  const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.1 });

  useEffect(() => {
    // Force a resize event after the component mounts
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.075, // Lower values make scrolling smoother
        multiplier: 0.9, // Adjust scrolling speed (lower is slower)
        class: "is-revealed",
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      containerRef={containerRef}
      watch={[]}
    >
      <DefaultLayout>
        <main data-scroll-container ref={containerRef}>
          <div data-scroll-section className="h-screen">
            <HeaderSection />
          </div>
          <motion.div
            data-scroll-section
            ref={aboutRef}
            initial={{ opacity: 0, y: 50 }}
            animate={
              isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>
          <motion.div
            data-scroll-section
            ref={techRef}
            initial={{ opacity: 0, y: 50 }}
            animate={
              isTechInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.5 }}
          >
            <Technologies />
          </motion.div>
          <motion.div
            data-scroll-section
            ref={projectsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={
              isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.5 }}
          >
            <Projects />
          </motion.div>
        </main>
      </DefaultLayout>
    </LocomotiveScrollProvider>
  );
};

export default IndexPage;
