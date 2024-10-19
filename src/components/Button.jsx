import React from "react";
import { Link } from "react-router-dom";
function Button({ name ,cliclHandler}) {
  return (
    <button onClick={()=>cliclHandler()}  className={`bg-[#00EEFF] shadow-[0_0_15px_#00EEFF] hover:shadow-[0_0_0px_#00EEFF] px-4 py-1 text-zinc-800 font-mono rounded-full transition-shadow duration-300 ease-in-out`}>
      {name}
    </button>
  );
}
export default Button;
