import react from "react";

function SkillBar({ name, percentage, Icon }) {
  return (
    <div className="mt-8 w-full">
      <div className="flex justify-between text-white">
        <h1 className="text-xl  flex  items-center gap-5">
          {Icon && <Icon />}
          {name}
        </h1>
        <h1>{percentage}%</h1>
      </div>
      <div className="bg-[#00EEFF] h-2 rounded-full mt-2 w-full  ">
        <div
          className={`h-full  bg-[#6258F0] rounded-full`}
          style={{ width: `${percentage}%` }} 
        ></div>
      </div>
    </div>
  );
}
export default SkillBar;
