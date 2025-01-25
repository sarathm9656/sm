
import './App.css'

import React from "react";
import WelcomeSection from "./compontes/WelcomeSection";
import AboutSection from "./compontes/AboutSection";
import SkillsSection from "./compontes/SkillsSection";
import ProjectsSection from "./compontes/ProjectsSection";
import ContactSection from "./compontes/ContactSection";
import ExperienceSection from "./compontes/Experiance_section"
import TagCloud from 'TagCloud';
import Footer from './compontes/footer';

// import "animate.css/animate.min.css";


import './index.css';

const App = () => {

  
  return (
    <div className='portfolio'>
      <div id="home"><WelcomeSection/></div>
      <div id="about"><AboutSection/></div>
      <div id="tagcloud"> </div>
      <div id="skill"><SkillsSection/></div>
      <div id="project"><ProjectsSection/></div>
      <div id="ContactSe"><ExperienceSection/></div>
      <div id="Experience"><ContactSection/></div>
              <Footer/>
    </div>

  
  );
    
}
      
     




//     <div className=" rgb(18, 18, 18) text-white">
      
//       {/* <Particles_back/> */}
//       <Navbar/>
//       <WelcomeSection />
//       <AboutSection />
//       <SkillsSection />
//       <ProjectsSection />
//       <ExperienceSection/>
//       <ContactSection />
//       <Footer/>
//     </div>
//   );
// };

export default App;


