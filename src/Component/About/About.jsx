import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const About = () => {

  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };

  }, []);


  const skills = [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Supabase",
    "Git & GitHub",
    "Vercel",
    "Google Stitch",
  ];


  return (
    <section
      ref={aboutRef}
      id="about"
      className={`
        about-section
        ${isVisible ? "about-visible" : ""}
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
        px-6
        py-28
        text-white
        md:px-10
        lg:px-16
      `}
    >


      {/* =================================
          BACKGROUND GLOW
      ================================= */}
      <div
        className="
          about-glow
          pointer-events-none
          absolute
          -left-40
          top-1/3
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#1683ff]/10
          blur-[140px]
        "
      />


      <div className="relative z-10 mx-auto max-w-[1400px]">


        {/* =================================
            SECTION HEADER
        ================================= */}
        <div
          className="
            about-header
            mb-16
            flex
            items-center
            gap-4
          "
        >

          {/* Blue Dot */}
          <span
            className="
              about-dot
              h-3
              w-3
              shrink-0
              rounded-full
              bg-[#1683ff]
            "
          />


          {/* Label */}
          <span
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-[#1683ff]
            "
          >
            About Me
          </span>


          {/* Line */}
          <div
            className="
              about-line
              h-px
              max-w-[300px]
              flex-1
              bg-white/10
            "
          />

        </div>


        {/* =================================
            MAIN CONTENT
        ================================= */}
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-16
            lg:grid-cols-[1.2fr_0.8fr]
            lg:gap-24
          "
        >


          {/* =================================
              LEFT CONTENT
          ================================= */}
          <div className="about-content">

            {/* Main Heading */}
            <h2
              className="
                text-[52px]
                font-medium
                leading-[0.92]
                tracking-[-0.055em]
                text-[#f5f5f5]
                md:text-[72px]
                lg:text-[92px]
              "
            >
              Building ideas
              <br />

              <span className="text-[#1683ff]">
                into experiences.
              </span>
            </h2>


            {/* Description */}
            <div className="mt-12 max-w-[720px]">

              <p
                className="
                  text-lg
                  leading-[1.8]
                  text-[#b8b8b8]
                  md:text-xl
                "
              >
                I'm Ratnpriya, a BCA student and frontend developer
                who enjoys turning ideas into clean, interactive and
                meaningful web experiences.
              </p>


              <p
                className="
                  mt-6
                  text-base
                  leading-[1.8]
                  text-[#777]
                  md:text-lg
                "
              >
                I work with modern web technologies and continuously
                explore new tools to improve the way I design, develop
                and deploy digital products.
              </p>

            </div>


            {/* =================================
                STATS
            ================================= */}
            <div
              className="
                mt-14
                grid
                grid-cols-2
                gap-8
                md:grid-cols-3
              "
            >

              {/* Stat 1 */}
              <div className="stat-card">

                <h3
                  className="
                    text-3xl
                    font-semibold
                    text-white
                    md:text-4xl
                  "
                >
                  01+
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    tracking-wide
                    text-[#666]
                  "
                >
                  Years Learning
                </p>

              </div>


              {/* Stat 2 */}
              <div className="stat-card">

                <h3
                  className="
                    text-3xl
                    font-semibold
                    text-white
                    md:text-4xl
                  "
                >
                  10+
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    tracking-wide
                    text-[#666]
                  "
                >
                  Projects & Builds
                </p>

              </div>


              {/* Stat 3 */}
              <div className="stat-card">

                <h3
                  className="
                    text-3xl
                    font-semibold
                    text-white
                    md:text-4xl
                  "
                >
                  ∞
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    tracking-wide
                    text-[#666]
                  "
                >
                  Things to Learn
                </p>

              </div>
                                  
            </div>

          </div>

                

          {/* =================================
              RIGHT CONTENT
          ================================= */}
          <div
            className="
              about-tools
              lg:pt-6
            "
          >

            {/* Small Heading */}
            <span
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#666]
              "
            >
              Currently Working With
            </span>


            {/* Tools Heading */}
            <h3
              className="
                mt-3
                text-2xl
                font-medium
                text-white
                md:text-3xl
              "
            >
              Tools & Technologies
            </h3>


            {/* =================================
                SKILLS
            ================================= */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >

              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="
                    skill-pill
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.025]
                    px-5
                    py-3
                    text-sm
                    text-[#bdbdbd]
                  "
                >
                  {skill}
                </div>
              ))}

            </div>

            {/* =================================
                CURRENTLY LEARNING CARD
            ================================= */}
            <div
              className="
                learning-card
                mt-12
                rounded-2xl
                border
                border-white/10
                bg-white/[0.025]
                p-7
                backdrop-blur-sm
                md:p-8
              "
            >

              {/* Card Top */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    text-sm
                    tracking-wide
                    text-[#666]
                  "
                >
                  CURRENTLY LEARNING
                </span>


                {/* Status Dot */}
                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[#1683ff]
                    shadow-[0_0_12px_#1683ff]
                  "
                />

              </div>


              {/* Card Title */}
              <h4
                className="
                  mt-5
                  text-2xl
                  font-medium
                  text-white
                "
              >
                React.js & Modern Web
              </h4>


              {/* Card Description */}
              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-[#777]
                "
              >
                Exploring component-based development, modern UI,
                backend integration and better deployment workflows.
              </p>

            </div>
            
             {/* Contact Button */}
                <button
                onClick={() =>
                    window.location.href = "mailto:ratnpriya2004@gmail.com"
                }
                className="about-contact-button"
                >
                <span>Contact Me</span>
                <span className="contact-arrow">↗</span>
                </button>
        
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
