import React, { useState } from "react";
import signature from "../../assets/signature.png";
import { TfiAlignJustify } from "react-icons/tfi";
import Navmobile from "./Navmobile";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle instant scroll when a navbar item is clicked
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "auto", // Instantly jump to the section (no smooth behavior)
        block: "start",   // Aligns to the top of the section
      });
    }
  };

  return (
    <div className="relative">
      <div className="h-16 w-full flex justify-between px-4">
        <div className="h-14 mt-2">
          <img
            className="w-full h-full object-contain"
            src={signature}
            alt="Signature"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          onClick={() => setIsVisible(!isVisible)}
          className="mt-5 mr-2 lg:hidden"
        >
          <TfiAlignJustify color="white" size="25px" />
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:text-white lg:flex gap-14 items-center">
          {["Home", "Projects", "Skills", "Contact"].map((item, index) => {
            const sectionId = item.toLowerCase(); // Lowercase ID like 'home', 'projects', etc.
            return (
              <button
                key={index}
                className="mb-3 hover:text-[#00EEFF] text-[1.5vw] mr-2 font-medium"
                onClick={() => handleScroll(sectionId)} // Scroll to section instantly on click
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isVisible && <Navmobile setClose={setIsVisible} />}
    </div>
  );
}

export default Navbar;
