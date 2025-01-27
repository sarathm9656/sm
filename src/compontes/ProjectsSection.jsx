const ProjectsSection = () => (
  <section className="bg-black text-center py-20 h-full">
    {/* Small Heading "03 . PROJECT" in green and left-aligned with margin */}
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-500 mb-4 text-left ml-4">03. PROJECT</h3>

    {/* Main Heading - Left-aligned with margin */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-white flex items-center justify-center space-x-4">
      <div className="bg-gray-900 w-16 sm:w-20 md:w-24 h-2 rounded-[10px]"></div>
      <span className="my-10">My Projects</span>
      <div className="bg-gray-900 w-16 sm:w-20 md:w-24 h-2 rounded-[10px]"></div>
    </h2>

    {/* Add margin-top to create 50px gap */}
    <div className="flex flex-wrap justify-center gap-8 mt-12">
      <ProjectCard 
        title="Online Exam Portal" 
        description="I developed an efficient and secure Online Exam Portal for educational and professional use. The platform includes features like user authentication, exam management, real-time proctoring, and automated grading. Technologies used include React.js, Node.js, Express.js, and MongoDB. I led the full-stack development, collaborating with a cross-functional team to ensure seamless integration and high user satisfaction." 
        link1="https://online-exam-portal-nu.vercel.app" 
        link2="https://github.com/sarathm9656/Online_exam_portal"
      />
       <ProjectCard 
        title="API check" 
        description="In this project, I utilized Axios, a popular HTTP client for JavaScript, to fetch data from an API and display it within a React application. By leveraging React's useState and useEffect hooks, I efficiently managed the component's state, including loading and error handling, ensuring a smooth and responsive user experience." 
        link1="https://api-checker.netlify.app" 
        link2="https://github.com/sarathm9656/api_tester"
      />
      <ProjectCard 
        title="Portfolio Website" 
        description="I developed an interactive developer portfolio using React, highlighting my skills, projects, and experiences with a strong focus on aesthetics and functionality. Utilizing Tailwind CSS for a responsive design and TagCloud for dynamic visual representation of skills, I ensured a sleek and engaging interface. Material-UI components contributed to a professional UI, while Firebase facilitated seamless data storage, authentication, and real-time interactions. Framer Motion added smooth animations, enhancing user experience and interactivity. By combining these advanced tools, I created a visually appealing, user-friendly, and high-performing portfolio." 
        link1="#" 
        link2="https://github.com/sarathm9656/sm"
      />
      <ProjectCard 
        title="Instagram Clone" 
        description="I created a simple Instagram clone using HTML and CSS, replicating the design and layout of the Instagram interface. It includes features like a navigation bar, user profile section, and a feed layout with posts, showcasing my front-end development skills." 
        link1="https://instasample.netlify.app/#"
        link2="https://github.com/sarathm9656/insta" 
      />
     
    </div>
  </section>
);

const ProjectCard = ({ title, description, link1, link2 }) => (
  <div className="bg-gray-800 p-6 w-80 sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-6 text-center rounded-lg hover:bg-gray-600 transition duration-300">
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-300">{description}</p>
    <div className="flex flex-col mt-4">
      <a href={link1} className="text-green-500 hover:text-yellow-400 transition duration-300">
        Demo
      </a>
      
        <a href={link2} className="text-green-500 mt-2 hover:text-yellow-400 transition duration-300">
          Source Code
        </a>
     
    </div>
  </div>
);

export default ProjectsSection;
