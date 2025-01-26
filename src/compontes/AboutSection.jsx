import React, { useRef } from "react";
import TagCloudComponent from "./TagCloudComponent";
import './about.css'; // Importing the custom styles

function AboutSection() {
  // Reference to the contact section
  const contactRef = useRef(null);

  // Function to scroll to the ContactSection
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="about-section">
        <div className="main-content">

          {/* Left Part */}
          <div className="left-part">
            <h6 className="intro-heading">01. INTRO</h6>
            <h2 className="about-heading">
              <div className="divider"></div>
              <span>About Me</span>
              <div className="divider"></div>
            </h2>
            <p className="description">
              Hi there! I’m Sarath, a MERN stack developer passionate about creating scalable and user-friendly web applications. With expertise in MongoDB, Express.js, React, and Node.js, I enjoy transforming ideas into impactful digital experiences.
            </p>
            <p className="description">
              I thrive on learning new technologies, solving challenges, and collaborating to bring projects to life.
            </p>
            <a href="#contact" className="contact-link">
              Let’s build something amazing together!
            </a>
            <p className="quote">"Success is the sum of small efforts, repeated day in and day out."</p>
            <p className="author">~ Robert Collier</p>
            <a href="#contact"> </a>
          </div>

          {/* Right Part */}
          <div className="right-part">
            <TagCloudComponent />
          </div>
        </div>
      </section>

      {/* Contact Section - Scrolled into view */}
      <div ref={contactRef}></div>
    </>
  );
}

export default AboutSection;
