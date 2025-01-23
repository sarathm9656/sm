import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
              href="/Sarath M.pdf"
              download="SarathM_Resume.pdf"
              className="text-lg md:text-xl text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            >
              Resume
            </a>
          </div>

          {/* Main Content */}
          <div className="flex flex-col justify-center items-start h-full px-8 sm:px-16 lg:px-32 space-y-6">
            <h6 className="text-green-500 text-lg sm:text-xl animate-pulse">
              {getGreetingMessage()}
            </h6>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Sarath M
            </h1>
            <p className="text-lg sm:text-xl max-w-md">
              MERN Stack Developer | Passionate about building scalable web
              applications
            </p>
            <button
              onClick={handleAboutMeClick}
              className="border-2 border-green-500 px-6 py-2 text-sm sm:text-base rounded hover:bg-green-500 hover:text-black transition"
            >
              About Me
            </button>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-8 w-full flex justify-between px-8 sm:px-16 lg:px-">
            {/* Say Hello Section */}
            <a
              href="mailto:sarathmullath2003@gmail.com"
              className="text-lg font-semibold hover:underline"
            >
              <span className="text-white text-3xl">Say Hello!</span>
            </a>

            {/* Icons Section */}
            <div className="flex flex-col items-end space-y-4 pb-2">
              <a
                href="https://www.instagram.com/sarath_0z4?igsh=dnFyNHltbjRvNmR5"
                className="hover:text-green-500 transition text-white"
              >
                <InstagramIcon fontSize="large" />
              </a>
              <a
                href="https://github.com/sarathm9656"
                className="hover:text-green-500 transition text-white"
              >
                <GitHubIcon fontSize="large" />
              </a>
              <a
                href="http://t.me/SARATHMULLATH"
                className="hover:text-green-500 transition text-white"
              >
                <TelegramIcon fontSize="large" />
              </a>
              <a
                href="https://wa.me/qr/MRVSKRQHJZ2EC1"
                className="hover:text-green-500 transition text-white"
              >
                <WhatsAppIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
