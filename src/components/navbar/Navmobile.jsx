import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";

function Navmobile({ setClose }) {
  const navRef = useRef();

  const closeNav = () => {
    gsap.to(navRef.current, {
      x: "100%", // Move off-screen to the right
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        setClose(false); // Call setClose after the animation completes
      },
    });
  };

  useEffect(() => {
    // Animation to slide in when component mounts
    gsap.fromTo(
      navRef.current,
      { x: "100%" }, // Start off-screen to the right
      {
        x: "0%",
        duration: 1,
        ease: "power3.inOut",
      }
    );
  }, []);

  return (
    <div
      ref={navRef}
      className={`fixed  top-0 left-0 w-full h-screen bg-gradient-to-t from-[#201A7A] via-[#201A7A] to-[#00D4FF] flex flex-col text-white`}
    >
      <h1 onClick={closeNav} className="self-end p-4 pr-3">
        <IoMdClose size="35px" />
      </h1>
      <h1 className="text-4xl font-thin mx-5 mb-2">Menu</h1>
      <hr className="mt-2 font-thin opacity-50" />
      <div className="flex flex-col ml-5 mt-8">
        <Link className="mb-3 opacity-70  text-[5.4vw]">Home</Link>
        <Link className="mb-3 opacity-60 text-[5.4vw]">Projects</Link>
        <Link className="mb-3 opacity-60 text-[5.4vw]">Skills</Link>
        <Link className="mb-3 opacity-60 text-[5.4vw]">Contact</Link>
      </div>
      <hr className="mt-5 opacity-50" />
      <div className="flex ml-5 mt-10 text-2xl gap-5 opacity-85">
        <a
          href="https://www.instagram.com/ritikgupta0990/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/RitikGu24346807"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100060419000955"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/ritik-gupta-52aa982a7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/916204572720"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default Navmobile;
