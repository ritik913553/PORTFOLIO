import React from 'react';
import { ReactTyped  } from 'react-typed';


function AutoTypingText() {
  return (
      <h1 className="text-[5vw] lg:text-[3vw] text-[#00EEFF]">
          <ReactTyped 
            strings={["Frontend Developer", "Backend Developer", "React Developer","Problem Solver"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
      </h1>
  );
}

export default AutoTypingText;
