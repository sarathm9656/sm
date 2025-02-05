import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import TypingEffect from "./TypingEffect";

/**
 * Function to handle navigation to the About Me section.
 */
const handleAboutMeClick = () => {
  console.log("Navigating to About Me section...");
  // Logic to navigate to the About Me section or another route.
};

/**
 * Function to dynamically calculate the greeting message based on the time of day.
 */
const getGreetingMessage = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good Morning!";
  } else if (currentHour < 18) {
    return "Good Afternoon!";
  } else {
    return "Good Evening!";
  }
};

export default function WelcomeSection() {
  return (
    <>
      {/* Section with particles background */}
      <div className="relative h-screen w-full bg-black text-white">
        {/* Content Section */}
        <div className="relative z-10 h-full">
          {/* Resume Link */}
          <div className="absolute top-5 right-5 pt-10 pr-10">
            <a
              href="./SARATH_M.pdf"
              download="SarathM_Resume.pdf"
              className="text-lg md:text-xl text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            >
              Resume
            </a>
          </div>

          {/* Main Content */}
          <div className="flex flex-col justify-center items-start h-full px-4 sm:px-8 lg:px-16 space-y-6">
            <h6 className="text-green-500 text-lg sm:text-xl animate-pulse">
             Hi!... {getGreetingMessage()}
            </h6>
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
             <h4 className="inline text-3xl text-green-900 animate-ping">
              I am,</h4> Sarath M
            </span>
            <p className="text-lg sm:text-xl max-w-md">
              MERN Stack Developer | Passionate about building scalable web
              applications
            </p>
            <a href="#about">
            <button

              className="border-2  border-green-500 px-6 py-2 text-sm sm:text-base rounded-bl-2xl rounded-tr-2xl hover:bg-green-500 hover:text-black transition mb-10"
            >
              About Me
            </button>
            </a>
              
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-8 w-full flex justify-between flex-row-reverse  px-4 sm:px-8 lg:px-16 ">
            {/* Say Hello Section */}
            
           

            {/* Icons Section */}
            <div className="flex flex-col items-end space-y-4 pb-2">
              <a
                href="https://www.instagram.com/sarath_0z4?igsh=dnFyNHltbjRvNmR5"
                target="_blan"
                className="hover:text-green-500 transition text-white"
              >
                <InstagramIcon fontSize="large" />
              </a>
              <a
                href="https://github.com/sarathm9656"
              target="_blank"
                className="hover:text-green-500 transition text-white"
              >
                <GitHubIcon fontSize="large" />
              </a>
              <a
                href="https://www.linkedin.com/in/sarath-mullath/"
                target="_blank"
                className="hover:text-green-500 transition text-white"
              >
                <LinkedInIcon fontSize="large" />
              </a>
              <a
                href="http://t.me/SARATHMULLATH"
                target="_blank"
                className="hover:text-green-500 transition text-white"
              >
                <TelegramIcon fontSize="large" />
              </a>
              {/* https://wa.me/qr/MRVSKRQHJZ2EC1 */}
             
            </div>
            <a
              href="mailto:sarathmullath2003@gmail.com"
              className="text-lg font-semibold hover:underline"
            >
              <span className="text-white text-3xl hover:bg-green-600 ">Say Hello!</span>
            </a>
          </div>
          
        </div>
      </div>
    </>
  );
}
