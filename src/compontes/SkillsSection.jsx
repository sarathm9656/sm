import React from "react";

function SkillsSection() {
  return (
    <section className="bg-[rgb(0,0,0)] py-16 px-6 sm:px-8">
      <div className="skill_head">
        {/* Small Heading "02 Skills" in green and left-aligned */}
        <h3 className="text-lg sm:text-xl font-semibold text-green-500 mb-4 text-left">
          02. SKILLS
        </h3>

        {/* Main Heading "My Skills" Left-aligned */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-white flex items-center justify-center space-x-4">
          <div className="bg-gray-900 w-16 sm:w-20 h-2 rounded-[10px]"></div>
          <span className="my-10">My Skills</span>
          <div className="bg-gray-900 w-16 sm:w-20 h-2 rounded-[10px]"></div>
        </h2>
      </div>

      <div className="skill_content">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SkillCard
            logo="⚛️"
            title="React"
            description="Building dynamic and interactive UIs using React.js."
            animation="animate-spin"
          />
          <SkillCard
            logo={<i className="devicon-nodejs-plain colored text-5xl" />}
            title="Node.js"
            description="Building scalable backend APIs with Node.js and Express."
            animation="animate-bounce"
          />
          <SkillCard
            logo={<i className="devicon-express-original text-5xl" />}
            title="Express.js"
            description="Developing robust server-side applications using Express.js."
            animation="animate-spin"
          />
          <SkillCard
            logo="🍃"
            title="MongoDB"
            description="Managing NoSQL databases with MongoDB efficiently."
            animation="animate-pulse"
          />
          <SkillCard
            logo="📜"
            title="JavaScript"
            description="Proficient in JavaScript for both front-end and back-end."
            animation="animate-wiggle"
          />
          <SkillCard
            logo="🌐"
            title="HTML"
            description="Crafting semantic and accessible web structures using HTML5."
            animation="animate-bounce"
          />
          <SkillCard
            logo="🎨"
            title="CSS"
            description="Designing responsive and visually appealing layouts using CSS3."
            animation="animate-spin"
          />
          <SkillCard
            logo={<i className="devicon-git-plain colored text-5xl" />}
            title="Git"
            description="Version control and collaboration using Git and GitHub."
            animation="animate-bounce"
          />
          <SkillCard
            logo={<i className="devicon-tailwindcss-plain colored text-5xl" />}
            title="Tailwind CSS"
            description="Crafting modern and responsive designs using Tailwind CSS."
            animation="animate-pulse"
          />
          <SkillCard
            logo={<i className="devicon-visualstudio-plain colored text-5xl" />}
            title="VS Code"
            description="Efficient coding and debugging using Visual Studio Code."
            animation="animate-wiggle"
          />
          <SkillCard
            logo={<i className="devicon-mysql-plain colored text-5xl" />}
            title="SQL"
            description="Managing relational databases using SQL."
            animation="animate-bounce"
          />
          <SkillCard
            logo={<i className="devicon-bootstrap-plain colored text-5xl" />}
            title="Bootstrap"
            description="Building responsive web designs using Bootstrap framework."
            animation="animate-pulse"
          />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ logo, title, description, animation }) {
  return (
    <div className="relative bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group h-40 sm:h-48 w-full max-w-[300px] flex flex-col justify-center items-center mx-auto">
      {/* Default View (Logo with Animation) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-all duration-300 group-hover:opacity-0">
        <div className={`text-4xl sm:text-6xl mb-2 ${animation}`}>{logo}</div>
        <h3 className="text-lg sm:text-2xl font-bold">{title}</h3>
      </div>

      {/* Hover View (Details) */}
      <div className="absolute inset-0 bg-gray-700 text-center flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default SkillsSection;
