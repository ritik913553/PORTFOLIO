import react, { useEffect, useMemo, useState } from "react";
import Project from "./Project";
import { projectsData } from "../data/projectsData.js";

function Projects() {
 
  const memoizedProjects = useMemo(() => {
    return projectsData.map((project, index) => (
      <Project key={project.id} project={project}  />
    ));
  }, [projectsData]); // Dependency array: re-compute if projectsData changes

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto px-5  py-10 mt-10 text-white ">
      <h1 className="text-5xl lg:text-9xl ">Works</h1>
      {memoizedProjects} {/* Use memoized version here */}
    </div>
  );
}

export default Projects;
