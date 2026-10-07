import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

const Skills = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    const currentSection = skillsRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Supabase",
    "Vercel",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PHP",
    "MySQL",
    "Google Stitch",
  ];

  return (
    <section
      ref={skillsRef}
      id="skills"
      className={`skills-section ${
        isVisible ? "skills-visible" : ""
      }`}
    >
      {/* Background Glow */}
      <div className="skills-glow"></div>

      <div className="skills-container">

        {/* TOP LABEL */}
        <div className="skills-heading-row">
          <span className="skills-dot"></span>

          <span className="skills-label">
            Skills & Technologies
          </span>

          <div className="skills-line"></div>
        </div>

        {/* MAIN CONTENT */}
        <div className="skills-main">

          {/* LEFT SIDE */}
          <div className="skills-content">

            <h2>
              Tools I use to
              <br />
              <span>build things.</span>
            </h2>

            <p>
              A growing collection of technologies I use to
              design, develop and deploy modern digital
              experiences.
            </p>

            <button
              type="button"
              className="skills-contact-button"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              <span>Contact Me</span>

              <span className="skills-contact-arrow">
                ↗
              </span>
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="skills-cloud">

            {skills.map((skill, index) => (
              <div
                key={skill}
                className="skills-pill"
                style={{
                  "--delay": `${index * 0.12}s`,
                  "--float":
                    index % 2 === 0 ? "5s" : "6s",
                }}
              >
                <span className="skills-pill-dot"></span>

                <span>{skill}</span>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;