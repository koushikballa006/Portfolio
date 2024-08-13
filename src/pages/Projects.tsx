// src/components/Projects.tsx
import React from "react";
import Slider from "react-slick";
import styles from "../styles/Projects.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Project {
  title: string;
  subtitle: string;
}

const projects: Project[] = [
  { title: "Project 1", subtitle: "Description of project 1" },
  { title: "Project 2", subtitle: "Description of project 2" },
  { title: "Project 3", subtitle: "Description of project 3" },
  { title: "Project 4", subtitle: "Description of project 4" },
  { title: "Project 5", subtitle: "Description of project 5" },
  { title: "Project 6", subtitle: "Description of project 6" },
];

const Projects: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>My Projects</h2>
      <Slider {...settings} className={styles.slider}>
        {projects.map((project, index) => (
          <div key={index}>
            <div className={`${styles.container} ${styles.noselect}`}>
              <div className={styles.canvas}>
                {[...Array(25)].map((_, i) => (
                  <div
                    key={i}
                    className={`${styles.tracker} ${styles[`tr${i + 1}`]}`}
                  ></div>
                ))}
                <div className={styles.card}>
                  <p className={styles.prompt}>HOVER OVER :D</p>
                  <div className={styles.title}>{project.title}</div>
                  <div className={styles.subtitle}>{project.subtitle}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
