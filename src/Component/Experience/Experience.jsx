import React, { useEffect, useRef, useState } from "react";
import "./Experience.css";

const Experience = () => {
  const experienceRef = useRef(null);
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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={experienceRef}
      id="experience"
      className={`experience-section ${
        isVisible ? "experience-visible" : ""
      }`}
    >
      {/* =========================
          TOP LABEL
      ========================= */}

      <div className="experience-heading-row">
        <span className="experience-dot"></span>

        <span className="experience-label">
          Experience
        </span>

        <div className="experience-line"></div>
      </div>


      {/* =========================
          INTRO
      ========================= */}

      <div className="experience-intro">
        <h2>
          Where I've<br />
          <span>worked.</span>
        </h2>

        <p>
          A look at the experiences where I've learned,
          built and worked on real-world projects.
        </p>
      </div>


      {/* =========================
          EXPERIENCE TIMELINE
      ========================= */}

      <div className="experience-timeline">

        {/* TIMELINE LINE */}
        <div className="timeline-line"></div>


        {/* EXPERIENCE ITEM */}
        <article className="experience-item">

          {/* YEAR */}
          <div className="experience-year">
            <span>2026</span>
          </div>


          {/* DOT */}
          <div className="timeline-dot">
            <span></span>
          </div>


          {/* CONTENT */}
          <div className="experience-card">

            <div className="experience-card-top">

              <div>
                <span className="experience-type">
                  Internship / Professional Experience
                </span>

                <h3>
                  Nexova X
                </h3>

                <h4>
                  Web Developer
                </h4>
              </div>

              <span className="experience-status">
                Current
              </span>

            </div>


            <p className="experience-description">
              Working on modern web development projects,
              responsive interfaces and real-world client
              requirements while learning professional
              development workflows.
            </p>


            {/* TECHNOLOGIES */}
            <div className="experience-tech">

              <span>React.js</span>
              <span>Tailwind CSS</span>
              <span>Supabase</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>Responsive UI</span>

            </div>


            {/* WORK HIGHLIGHTS */}
            <div className="experience-highlights">

              <div>
                <span className="highlight-number">
                  01
                </span>

                <p>
                  Built and improved modern responsive
                  web interfaces.
                </p>
              </div>

              <div>
                <span className="highlight-number">
                  02
                </span>

                <p>
                  Worked with authentication, admin panels
                  and Supabase integration.
                </p>
              </div>

              <div>
                <span className="highlight-number">
                  03
                </span>

                <p>
                  Used Git and GitHub for project workflow
                  and version control.
                </p>
              </div>

            </div>

          </div>

        </article>

      </div>

{/* =========================
    EDUCATION
========================= */}

<div className="education-block">

  {/* TOP LABEL */}
  <div className="education-heading-row">
    <span className="education-dot"></span>

    <span className="education-label">
      Education
    </span>

    <div className="education-line"></div>
  </div>


  {/* EDUCATION CARDS */}
  <div className="education-cards">

    {/* BCA */}
    <div className="education-card">

      <span className="education-year">
        2023–2026
      </span>

      <h3>
        Bachelor of Computer Applications
      </h3>

      <h4>
        GB College, Naugachia, Bhagalpur
      </h4>

      <p>
        Tilka Manjhi Bhagalpur University (TMBU)
      </p>

      <span className="education-status">
        Final Year · Semester 6
      </span>

    </div>


    {/* 12TH */}
    <div className="education-card">

      <span className="education-year">
        2023
      </span>

      <h3>
        12th — Bihar Board
      </h3>

      <h4>
        Senior Secondary Education
      </h4>

      <p>
        Bihar School Examination Board
      </p>

      <span className="education-status">
        419 / 500
      </span>

    </div>


    {/* 10TH */}
    <div className="education-card">

      <span className="education-year">
        2021
      </span>

      <h3>
        10th — CBSE
      </h3>

      <h4>
        Secondary School Education
      </h4>

      <p>
        Central Board of Secondary Education
      </p>

      <span className="education-status">
        Completed
      </span>

    </div>

  </div>

</div>
{/* CONTACT BUTTON */}
<button
  className="experience-contact-button"
  onClick={() =>
    (window.location.href = "mailto:ratnpriya2004@gmail.com")
  }
>
  <span>Contact Me</span>
  <span className="experience-contact-arrow">↗</span>
</button>
    </section>
  );
};

export default Experience;