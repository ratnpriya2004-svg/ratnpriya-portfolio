import React, { useEffect, useRef } from "react";
import myImage from "./../../assets/image/myimg.png";


const Hero = () => {
    const headingRef = useRef(null);

useEffect(() => {
  const heading = headingRef.current;

  if (!heading) return;

  const handleMouseMove = (e) => {
    const rect = heading.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    heading.style.setProperty(
      "--mouse-x",
      `${x * 15}px`
    );

    heading.style.setProperty(
      "--mouse-y",
      `${y * 15}px`
    );
  };

  const handleMouseLeave = () => {
    heading.style.setProperty("--mouse-x", "0px");
    heading.style.setProperty("--mouse-y", "0px");
  };

  heading.addEventListener("mousemove", handleMouseMove);
  heading.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    heading.removeEventListener("mousemove", handleMouseMove);
    heading.removeEventListener("mouseleave", handleMouseLeave);
  };
}, []);


  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >

      {/* =================================
          BACKGROUND IMAGE
      ================================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Very soft image */}
        <img
          src={myImage}
          alt=""
          className="
            hero-bg-image
            absolute
            right-[-8%]
            top-[18%]
            h-[115%]
            w-[65%]
            object-cover
            object-center
            opacity-[0.20]
            grayscale
            blur-[2px]
          "
        />

        {/* Black fade over image */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#050505]
            via-[#050505]/75
            to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#050505]
            via-transparent
            to-[#050505]/20
          "
        />

      </div>


      {/* =================================
          SUBTLE BLUE LIGHT
      ================================= */}

      <div
        className="
          absolute
          right-[15%]
          top-[25%]
          w-[400px]
          h-[400px]
          rounded-full
          bg-blue-600/10
          blur-[130px]
          pointer-events-none
          hero-blue-light
        "
      ></div>


      {/* =================================
          MAIN CONTENT
      ================================= */}

      <div
        className="
          relative
          z-10
          max-w-[1400px]
          mx-auto
          min-h-screen
          px-6
          md:px-10
          lg:px-16
          pt-32
          pb-16
          flex
          flex-col
          justify-between
        "
      >

        <div className="hero-heading-wrap">

            <div className="heading-motion-bg">
                <span className="motion-orb motion-orb-one"></span>
                <span className="motion-orb motion-orb-two"></span>
            </div>

            <h1 className="hero-title">
                <span className="hero-line hero-line-one">Turning</span>
                <span className="hero-line hero-line-two">Ideas</span>
                <span className="hero-line hero-line-three">
                Into Reality<span className="blue-dot">.</span>
                </span>
            </h1>

            </div>

        {/* =================================
            BOTTOM CONTENT
        ================================= */}

        <div
          className="
            mt-16
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-12
          "
        >

          {/* Description */}

          <div className="max-w-xl hero-description">

            <p
              className="
                text-base
                md:text-lg
                leading-relaxed
                text-gray-400
              "
            >
              I design and develop modern digital experiences
              that are clean, functional and built to make an impact.
            </p>

          </div>


          {/* Right side */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              lg:items-center
            "
          >

            <div className="hero-actions">

            {/* VIEW PROJECTS */}
            <button
                onClick={scrollToProjects}
                className="hero-action-btn hero-project-btn group"
            >
                <span className="hero-btn-text">
                View Projects
                </span>

                <span className="hero-btn-arrow">
                ↗
                </span>

                <span className="hero-btn-shine"></span>
            </button>


              {/* LET'S TALK */}
              <button
                onClick={() =>
                  (window.location.href = "mailto:ratnpriya2004@gmail.com")
                }
                className="hero-action-btn hero-talk-btn group"
              >
                <span className="hero-btn-text">Let's Talk</span>

                <span className="hero-btn-arrow">→</span>

                <span className="hero-btn-shine"></span>
              </button>

              {/* RESUME */}
                  <a
                    href="/resume.pdf"
                    download="Ratnpriya_Kumari_Resume.pdf"
                    className="hero-resume-btn"
                  >
                    <span>Download Resume</span>
                    <span className="hero-resume-arrow">↓</span>
                  </a>

            </div>

          </div>

        </div>


        {/* =================================
            SMALL STATS
        ================================= */}

        <div
          className="
            absolute
            bottom-8
            left-6
            md:left-10
            lg:left-16
            hidden
            xl:flex
            items-center
            gap-8
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-gray-600
          "
        >

          <span>03+ Projects</span>

          <span className="w-1 h-1 rounded-full bg-blue-500"></span>

          <span>Web Development</span>

          <span className="w-1 h-1 rounded-full bg-blue-500"></span>

          <span>Always Learning</span>

        </div>


        {/* SCROLL */}

        <div
          className="
            absolute
            bottom-8
            right-6
            md:right-10
            lg:right-16
            hidden
            md:flex
            items-center
            gap-3
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-gray-500
          "
        >

          <span>Scroll</span>

          <span className="w-12 h-px bg-white/20 relative overflow-hidden">

            <span
              className="
                absolute
                left-0
                top-0
                w-5
                h-px
                bg-blue-500
                scroll-line
              "
            ></span>

          </span>

        </div>

      </div>

    </section>
  );
};

export default Hero;