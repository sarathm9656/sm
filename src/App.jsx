
import './App.css'

import React from "react";
import { BrowserRouter,Route,Routes,Router } from 'react-router-dom';
import WelcomeSection from "./compontes/WelcomeSection";
import AboutSection from "./compontes/AboutSection";
import SkillsSection from "./compontes/SkillsSection";
import ProjectsSection from "./compontes/ProjectsSection";
import ContactSection from "./compontes/ContactSection";
import ExperienceSection from "./compontes/Experiance_section"
import Footer from './compontes/footer';

// import "animate.css/animate.min.css";


import './index.css';

const App = () => {

  
  return (
    <BrowserRouter>
  <div className="App">
    <Routes>
      <Route path="/" element={<>
      <WelcomeSection />
       <AboutSection/>
       <SkillsSection />
       <ProjectsSection />
       <ExperienceSection/>
       <ContactSection />
       <Footer/>
       
       
        </>
    } />
      {/* <Route path="/home" element={<WelcomeSection />} /> */}
      <Route path="/contact" element={<ContactSection />} />
    



    </Routes>
  </div>
</BrowserRouter>

  
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


