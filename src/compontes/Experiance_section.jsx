import React from "react";

function ExperienceSection() {
  return (
    <section className="experience-section py-20 bg-black text-white">
      <h3 className="text-xl font-semibold text-green-500 mb-4 text-left pl-5">04. EXPERIENCE</h3>
      
      <h2 className="text-4xl font-semibold mb-6 text-white flex items-center justify-center space-x-4">
  <div className="bg-gray-900 w-20 h-2 rounded-[10px]"></div>
  <span className="my-10"> My Experience</span>
  <div className="bg-gray-900 w-20 h-2 rounded-[10px]"></div>
</h2>
      <div className="experience-container flex flex-wrap justify-center gap-10">
        {/* Experience 1 */}
        <div className="experience-card bg-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-2/4 transition-transform transform hover:scale-105 hover:bg-gray-700 duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold mb-2">MERN Stack INTERN</h3>
          <h4 className="text-xl mb-4 text-gray-300">Synnefo Solutions </h4>
          <p className="text-lg mb-4">
          I completed a 5-month MERN Stack course at Synnefo Solutions, followed by a 1-month internship with the company. During this time, I built responsive and scalable web applications using MongoDB, Express, React, and Node.js. I collaborated with the team to develop new features, improve user experience, and enhance my programming skills through hands-on projects and tool exploration.         </p>
          <p className="mt-4 text-gray-400">Duration: DEC-2024 TO JAN-2025</p>
        </div>

        {/* Experience 2 */}
        <div className="experience-card bg-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-2/4 transition-transform transform hover:scale-105 hover:bg-gray-700 duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold mb-2">MERN STACK INTERN</h3>
          <h4 className="text-xl mb-4 text-gray-300">Laxmi Infotech</h4>
          <p className="text-lg mb-4">
            Developed interactive user interfaces with React, focusing on creating intuitive and user-friendly experiences. Collaborated with the design team to implement the UI/UX of several projects.
          </p>
          <p className="mt-4 text-gray-400">Duration: MAY-2023</p>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
