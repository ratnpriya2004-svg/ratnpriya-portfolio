import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import tastesphere from "./../../assets/image/test.png";
import trackmate from "./../../assets/image/travel.png";
import gbCollegeAI from "./../../assets/image/gb.png";
import aiLearning from "./../../assets/image/ai.png";
import restaurant from "./../../assets/image/res.png";
import banking from "./../../assets/image/bank.png";
import grocery from "./../../assets/image/grocery.png";
import rkMusic from "./../../assets/image/rk.png";

const Projects = () => {
  const projectsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      name: "TasteSphere",
      description: "Smart Recipe & Kitchen System",
      image: tastesphere,
      tech: ["HTML", "CSS", "JavaScript", "Oracle DB"],
      github: "https://github.com/ratnpriya2004-svg/TasteSphere",
    },

    {
      name: "TrackMate",
      description: "Railway Reservation System",
      image: trackmate,
      tech: ["ASP.NET", "C#", "Oracle DB", "SQL"],
      github: "https://github.com/ratnpriya2004-svg/TrackMate",
    },

    {
      name: "GB College AI Assistant",
      description: "AI Powered College Chatbot",
      image: gbCollegeAI,
      tech: ["HTML", "CSS", "JavaScript", "Gemini API"],
      github: "#",
    },

    {
      name: "AI Learning Path",
      description: "AI Based Learning Path Generator",
      image: aiLearning,
      tech: ["HTML", "CSS", "JavaScript", "AI"],
      github: "#",
    },

    {
      name: "Restaurant Management",
      description: "Online Restaurant Management System",
      image: restaurant,
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      github:
        "https://github.com/ratnpriya2004-svg/OnlineResturentManagementSystem",
    },

    {
      name: "Banking Management",
      description: "Banking Management System",
      image: banking,
      tech: ["ASP.NET MVC", "C#", "SQL Server"],
      github: "#",
    },

    {
      name: "Grocery Store",
      description: "Online Grocery Shopping Portal",
      image: grocery,
      tech: ["ASP.NET Core", "MySQL", "Identity"],
      github: "https://github.com/ratnpriya2004-svg/GroceryStore",
    },

    {
      name: "RK Music Player",
      description: "Interactive Web Music Player",
      image: rkMusic,
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github:
        "https://github.com/ratnpriya2004-svg/RK-MusicPlayer",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={projectsRef}
      id="projects"
      className={`projects-section ${
        isVisible ? "projects-visible" : ""
      }`}
    >
      {/* =========================
          PROJECTS TOP LABEL
      ========================= */}

      <div className="projects-heading-row">
        <span className="projects-dot"></span>

        <span className="projects-label">
          Projects
        </span>

        <div className="projects-line"></div>
      </div>


      {/* =========================
          PROJECTS TITLE
      ========================= */}

      <div className="projects-title">
        <h2>
          Things I've <span>built.</span>
        </h2>

        <p>
          A collection of projects I've built while exploring
          modern technologies.
        </p>
      </div>
 
      {/* =========================
          MOVING PROJECTS
      ========================= */}

      <div className="projects-window">

        <div className="projects-track">

          {[...projects, ...projects].map((project, index) => (

            <article
              className="project-card"
              key={`${project.name}-${index}`}
            >

              {/* IMAGE */}
              <div className="project-image-box">

                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />

              </div>


              {/* CARD CONTENT */}
              <div className="project-content">

                {/* PROJECT NAME */}
                <div className="project-name-row">

                  <span className="project-blue-line"></span>

                  <h3>{project.name}</h3>

                </div>


                {/* DESCRIPTION */}
                <p className="project-description">
                  {project.description}
                </p>


                {/* TECHNOLOGIES */}
                <div className="project-tech">

                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>


                {/* GITHUB */}
                {project.github !== "#" ? (

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                ) : (

                  <span className="project-github project-disabled">
                    GitHub
                    <span>↗</span>
                  </span>

                )}

              </div>

            </article>

          ))}

        </div>

      </div>
          
{/* CONTACT BUTTON */}
<button
  className="projects-contact-button"
  onClick={() =>
    (window.location.href = "mailto:ratnpriya2004@gmail.com")
  }
>
  <span>Contact Me</span>
  <span className="projects-contact-arrow">↗</span>
</button>

    </section>
  );
};

export default Projects;