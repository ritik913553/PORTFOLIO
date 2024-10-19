import React, { useEffect, useState } from "react";
import { motion, stagger } from "framer-motion";
import laptopImage from "../assets/dress.jpeg";
import profile from "../assets/profile.png";
import mobileImage from "../assets/ritik.jpeg";
import AutoTypingText from "./AutoTypingText";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import Button from "./Button";
import Navbar from "./navbar/Navbar";
import { useNavigate } from "react-router-dom";
import AlertModal from "./AlertModal";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // Default to mobile view if the width is less than 1024px
  const navigate = useNavigate(); 
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [cvUploaded, setCvUploaded] = useState(false); // Track if CV is uploaded

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function certificateHandler() {
    navigate('/certification'); // Route to your certificate page
  }

  function CVhandler() {
    if (!cvUploaded) {
      setShowModal(true); // Show the alert modal if the CV is not uploaded
    } else {
      // Logic for downloading the CV goes here (if the CV is uploaded)
      console.log("CV Downloaded!"); // Placeholder for actual download logic
    }
  }
  return (
   
    <div className="  w-full text-white px-5 font-mono lg:flex flex-row-reverse gap-2 lg:mt-8 justify-between">
       
      <div className=" h-72 lg:h-[38vw] lg:w-[30%] mt-5  rounded-2xl lg:rounded-xl overflow-hidden shadow-[3px_0px_25px_rgba(76,73,201,0.8)]">
        <img
          
          className={`h-full w-full  object-cover object-top  ${
            !isMobile && "transform scale-x-[-1]"
          }`}
          src={isMobile ? mobileImage : laptopImage}
          alt=""
        />
      </div>
      <div className="lg:w-[65%]">
        <h1 className="mt-5 text-md lg:text-xl ml-1">WELCOME TO MY WORLD !</h1>
        <h1 className="mt-8 text-lg ml-1 mb-2 lg:text-2xl">Hii , Myself</h1>
        <h2 className="text-5xl ">Ritik Gupta</h2>
        <div className="flex mt-2 lg:mt-0 ml-1 gap-2  ">
          <h1 className="text-[5vw] lg:text-[3vw]">And I'm a </h1>
          <AutoTypingText />
        </div>
        <p className="leading-[1.2] text-left text-[3.5vw] lg:text-lg lg:leading-5 lg:w-[90%] mt-6 ml-1">
          I am a passionate web developer with a strong foundation in both
          frontend and backend technologies. Over the course of my learning
          journey, I have built numerous projects using React, JavaScript, and
          modern web frameworks. My expertise extends to Data Structures and
          Algorithms, which has honed my problem-solving skills and helped me
          excel in platforms like LeetCode. With a keen interest in creating
          user-friendly interfaces and efficient backend systems, I am always
          eager to learn and grow as a full-stack developer.
        </p>
        <div className="flex mt-5 lg:mt-10 ml-1 text-lg lg:text-xl gap-3  ">
          <a
            className="rounded-full border p-[1.5vw] hover:scale-75 transition-all duration-300 ease-in-out   lg:p-[0.5vw] lg:w-[3.4vw] lg:h-[3.4vw] flex justify-center items-center  border-[#00EEFF]"
            href="https://github.com/ritik913553"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              color="#00EEFF"
              style={{
                filter: "drop-shadow(0 0 15px #00EEFF)",
                transition: "all 0.3s ease",
                zIndex: "1",
              }}
            />
          </a>
          <a
            className="rounded-full border p-[1.5vw]  hover:scale-75 transition-all duration-300 ease-in-out  lg:p-[0.5vw] lg:w-[3.4vw] lg:h-[3.4vw] flex justify-center items-center  border-[#00EEFF]"
            href="https://x.com/RitikGu24346807"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              color="#00EEFF"
              style={{
                filter: "drop-shadow(0 0 15px #00EEFF)",
                transition: "all 0.3s ease",
              }}
            />
          </a>
          <a
            className="rounded-full border hover:scale-75 transition-all duration-300 ease-in-out  p-[1.5vw] lg:p-[0.5vw] lg:w-[3.4vw] lg:h-[3.4vw] flex justify-center items-center  border-[#00EEFF]"
            href="https://www.facebook.com/profile.php?id=100060419000955"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              color="#00EEFF"
              style={{
                filter: "drop-shadow(0 0 15px #00EEFF)",
                transition: "all 0.3s ease",
              }}
            />
          </a>
          <a
            className="rounded-full border hover:scale-75 transition-all duration-300 ease-in-out  p-[1.5vw] lg:p-[0.5vw] lg:w-[3.4vw] lg:h-[3.4vw] flex justify-center items-center  border-[#00EEFF]"
            href="https://www.linkedin.com/in/ritik-gupta-52aa982a7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              color="#00EEFF"
              style={{
                filter: "drop-shadow(0 0 15px #00EEFF)",
                transition: "all 0.3s ease",
              }}
            />
          </a>
          <a
            className="rounded-full border p-[1.5vw] hover:scale-75 transition-all duration-300 ease-in-out  lg:p-[0.5vw] lg:w-[3.4vw] lg:h-[3.4vw] flex justify-center items-center  border-[#00EEFF]"
            href="https://www.instagram.com/ritikgupta0990/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              color="#00EEFF"
              style={{
                filter: "drop-shadow(0 0 15px #00EEFF)",
                transition: "all 0.3s ease",
              }}
            />
          </a>
        </div>
        <div className="mt-5  flex gap-2 lg:gap-5">
          <Button name="Download CV" cliclHandler={CVhandler} />
          <Button name="See Certification" cliclHandler={certificateHandler} />
        </div>
      </div>
       {/* Alert Modal */}
       {showModal && (
        <AlertModal
          message={"CV not uploaded yet!"}
          onClose={() => setShowModal(false)} // Close the modal when the button is clicked
        />
      )}
    </div>
  );
}
export default Header;
