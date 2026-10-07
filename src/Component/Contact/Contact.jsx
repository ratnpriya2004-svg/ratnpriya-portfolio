import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.sendForm(
      "service_e9bhtvl",
      "template_gvdig0e",
      e.target,
      {
        publicKey: "kKvuOGmjoFsUgUQkH",
      }
    );

    alert("Message sent successfully! ✨");

    e.target.reset();
  } catch (error) {
    console.error("EmailJS Error:", error);

    alert("Message could not be sent. Please try again.");
  }
};
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={contactRef}
      id="contact"
      className={`contact-section ${
        isVisible ? "contact-visible" : ""
      }`}
    >

  
      {/* =================================
          TOP LABEL
      ================================= */}

      <div className="contact-heading-row">

        <span className="contact-dot"></span>

        <span className="contact-label">
          Contact
        </span>

        <div className="contact-line"></div>

      </div>


      {/* =================================
          MAIN CONTENT
      ================================= */}

      <div className="contact-content">


        {/* =================================
            LEFT SIDE
        ================================= */}

        <div className="contact-left">

          <span className="contact-small-text">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's build
            <br />
            <span>something.</span>
          </h2>

          <p>
            Have a project, idea or opportunity in mind?
            Let's talk and create something meaningful together.
          </p>


          {/* EMAIL */}

          <a
            href="mailto:ratnpriya2004@gmail.com"
            className="contact-email"
          >
            <span>ratnpriya2004@gmail.com</span>
            <span className="contact-email-arrow">↗</span>
          </a>


          {/* INFO */}

          <div className="contact-info">

            <div className="contact-info-item">

              <span className="contact-info-icon">
                ✦
              </span>

              <div>
                <small>Location</small>
                <span>Bihar, India</span>
              </div>

            </div>


            <div className="contact-info-item">

              <span className="contact-info-icon">
                ✦
              </span>

              <div>
                <small>Availability</small>
                <span className="available-text">
                  <i></i>
                  Available for opportunities
                </span>
              </div>

            </div>

          </div>


          {/* SOCIAL LINKS */}

          <div className="contact-socials">

            <a
              href="https://github.com/ratnpriya2004-svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ratnpriya-kumari-448162273/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://vercel.com/ratnpriya2004-svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel ↗
            </a>

          </div>

          {/* RESUME */}

         <a
      href="/resume.pdf"
      download="Ratnpriya_Kumari_Resume.pdf"
      className="contact-resume"
    >
      Download Resume
      <span>↓</span>
    </a>

  </div>

        {/* =================================
            RIGHT SIDE — CONTACT FORM
        ================================= */}

        <div className="contact-form-card">

          <div className="contact-form-top">

            <div>
              <span className="form-number">
                01
              </span>

              <h3>
                Start a conversation.
              </h3>
            </div>

            <span className="form-status">
              Open
            </span>

          </div>


        <form onSubmit={handleSubmit}>

            {/* NAME */}

            <div className="form-group">

              <label>
                Name
              </label>

              <input 
                type="text"
                name="name"
                placeholder="Your name"
                required
              />

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label>
                Email
              </label>

              <input 
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />

            </div>


            {/* SUBJECT */}

            <div className="form-group">

              <label>
                Subject
              </label>

              <input 
                type="text"
                name="title"
                placeholder="What's this about?"
                required
              />

            </div>


            {/* MESSAGE */}

            <div className="form-group">

              <label>
                Message
              </label>

              <textarea
                name="message"
                rows="4"
                placeholder="Tell me a little about your project..."
                required
              ></textarea>
            </div>


            {/* SEND BUTTON */}

            <button
              type="submit"
              className="contact-send-button"
            >

              <span>
                Send Message
              </span>

              <span className="send-arrow">
                ↗
              </span>

            </button>

          </form>

        </div>

      </div>


      {/* =================================
          FOOTER
      ================================= */}

      <div className="contact-bottom">

        <span>
          © 2026 Ratnpriya Kumari
        </span>

        <span>
          Designed & Built with React.js
        </span>

      </div>

    </section>
  );
};

export default Contact;