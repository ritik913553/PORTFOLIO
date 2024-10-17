import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

function Project({ project, mover, count }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(50deg, rgba(98,88,240,1) 37%, rgba(21,36,102,1) 73%)",
      }}
      className="project mt-8 lg:mt-12 min-h-96  lg:min-h-64 gap-10 rounded-t-2xl lg-rounded-b-2xl bg-red-500 overflow-hidden lg:flex "
    >
      <div className=" lg:w-[35%]  lg:relative">
        <motion.img
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
          className="w-full h-full object-fill hidden lg:block lg:absolute lg:top-0 lg:left-0 z-10"
          src={project.imageSrc}
          alt=""
        />
        <video
          autoPlay
          loop
          muted
          loading="lazy"
          className="w-full h-full object-cover"
          src={project.videoSrc}
        ></video>
      </div>
      <div className="p-3 lg:w-[65%]">
        <h1 className="text-2xl font-bold lg:text-3xl lg:font-semibold">
          {project.projectName}
        </h1>
        <p className="leading-[1.2] lg:leading-5 mt-2 lg:text-lg lg:w-[80%] lg:opacity-80">
          {project.projectDescription}
        </p>
        <div className="mt-6">
          <h1 className="font-bold lg:text-lg lg:font-semibold">Built With</h1>
          <ul className="flex gap-6 text-[#00EEFF] text-2xl lg:text-3xl mt-1 items-center  ">
            {project.techStack.map((item, index) => (
              <li key={index}>
                {item === "React" ? (
                  <FaReact />
                ) : item === "Tailwind CSS" ? (
                  <RiTailwindCssFill />
                ) : item === "Database" ? (
                  <FaDatabase />
                ) : item == "html" ? (
                  <FaHtml5 />
                ) : item == "css" ? (
                  <FaCss3 />
                ) : item == "js" ? (
                  <IoLogoJavascript />
                ) : (
                  <h1 className="text-lg font-bold lg:font-semibold lg:text-xl">
                    {item}
                  </h1>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-white mt-8 flex gap-20 items-center">
          <a
          href={project.demoLink}
          target="_blank"
            className={`bg-[#00EEFF] shadow-[0_0_15px_#00EEFF] hover:shadow-[0_0_0px_#00EEFF] px-4 py-1 text-zinc-800 font-mono rounded-full transition-shadow duration-300 ease-in-out`}
          >
            Live Preview
          </a>
          <a
            href={project.repoLink}
            target="_blank"
            className="flex gap-3 text-xl mr-2 cursor-pointer "
          >
            <FaGithub color="#00EEFF" size="25px" /> Code{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Project;
