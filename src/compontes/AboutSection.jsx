import React, { useRef } from "react";
import TagCloudComponent from "./TagCloudComponent";
import './about.css'; // Importing the custom styles

function AboutSection() {
  // Reference to the contact section
  const contactRef = useRef(null);

  // Function to scroll to the ContactSection
  const scrollToContact = () => {
    // Scroll to the contact section smoothly
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="text-left py-20 bg-black text-white h-fullscreen px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="main flex flex-col md:flex-row justify-between items-start h-full space-y-8 md:space-y-0 w-full">

          {/* Left Part */}
          <div className="left_part flex-1 p-6">
            <h6 className="text-xl font-semibold text-green-500 mb-6">01. INTRO</h6>
            <h2 className="text-4xl font-semibold mb-6 text-white flex items-center justify-center space-x-4">
              <div className="bg-gray-900 w-20 h-2 rounded-[10px]"></div>
              <span className="my-10">About Me</span>
              <div className="bg-gray-900 w-20 h-2 rounded-[10px]"></div>
            </h2>
            <p className="text-lg max-w-3xl mb-8">
              Hi there! I’m Sarath, a MERN stack developer passionate about creating scalable and user-friendly web applications. With expertise in MongoDB, Express.js, React, and Node.js, I enjoy transforming ideas into impactful digital experiences.
            </p>
            <p className="text-lg max-w-3xl mb-8">
              I thrive on learning new technologies, solving challenges, and collaborating to bring projects to life.
            </p>
            <a href="/contact">
              <p className="my-8 text-green-600 font-bold">Let’s build something amazing together!</p>
            </a>
            <p className="text-lg italic">"Success is the sum of small efforts, repeated day in and day out."</p>
            <p className="font-bold">~ Robert Collier</p>
            <div className="hire_me_section">
              {/* <button
                className="px-6 py-2 mt-4 bg-teal-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 hover:bg-teal-600 duration-300 ease-in-out my-36"
                onClick={scrollToContact}
              >
                Hire Me
              </button> */}
            </div>
          </div>

          {/* Right Part */}
          <div className="C flex-1 flex justify-center items-center pt-36 md:pt-40 w-full md:w-1/2 p-6">
            <TagCloudComponent />
          </div>
        </div>
      </section>

      {/* Contact Section - Scrolled into view */}
      <div ref={contactRef}>
        {/* Uncomment and implement the ContactSection if necessary */}
        {/* <ContactSection /> */}
      </div>
    </>
  );
}

export default AboutSection;
