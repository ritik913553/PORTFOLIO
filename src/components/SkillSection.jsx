import react from "react";
import { FaHtml5, FaCss3, FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import SkillBar from "./SkillBar";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
function SkillSection() {
  const programmingData = [
    { name: "Html", icon: FaHtml5, percentage: "80" },
    { name: "CSS", icon: FaCss3, percentage: "70" },
    { name: "JavaScript", icon: IoLogoJavascript, percentage: "60" },
    { name: "DSA(Java)", icon: FaJava, percentage: "80" },
  ];
  const ToolData = [
    { name: "React", icon: FaReact, percentage: 80 },
    { name: "Github", icon: FaGithub, percentage: 50 },
    { name: "Vs code", icon: VscVscode, percentage: 80 },
    { name: "Tailwind CSS", icon: RiTailwindCssFill, percentage: 70 },
    { name: "GSAP", percentage: "60" },
    {name: "Express", icon: SiExpress, percentage: "80"}, 
    {name: "Node.js", icon: DiNodejsSmall, percentage: "70"},
    {name: "MongoDB", icon: DiMongodb, percentage: "80"}
  ];

  return (
    <div className="min-h-screen ">
      <h1
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,238,255,1) 45%, rgba(93,103,205,1) 86%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
        className=" bg-clip-text text-transparent text-5xl font-bold p-5 text-center"
      >
        My Skillset{" "}
      </h1>
      <div className="h-full flex flex-col gap-14 lg:flex lg:flex-row">
        <div className="programming w-full p-5 lg:w-1/2 ">
          <h1 className="text-2xl lg:text-3xl lg:font-semibold text-white font-bold mb-8 lg:mb-10">
            Programming
          </h1>
          {programmingData.map((item, index) => {
            return (
              <SkillBar
                key={index}
                name={item.name}
                percentage={item.percentage}
                Icon={item.icon}
              />
            );
          })}
        </div>
        <div className="Tools p-5 w-full lg:w-1/2 ">
          <h1 className="text-2xl lg:text-3xl lg:font-semibold text-white font-bold mb-8 lg:mb-10">
            Frameworks & Tools
          </h1>
          {ToolData.map((item, index) => {
            return (
              <SkillBar
                key={index}
                name={item.name}
                percentage={item.percentage}
                Icon={item.icon ? item.icon : null}
              />
            );
          })}
        </div> 
      </div>
      <p className="text-white px-5 lg:text-xl lg:w-[80%] mt-5 leading-6 text-lg">
          I'm committed to writing clean, maintainable code and am always eager
          to learn new tools ans technologies.Let's connect ans build something
          amazing together!
        </p>
    </div>
  );
}

export default SkillSection;
