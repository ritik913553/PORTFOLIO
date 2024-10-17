import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SkillSection from "./components/SkillSection";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  // Refs for each section
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Update URL, document title, and active section based on scroll position
  useEffect(() => {
    const sections = [
      { id: "home", ref: headerRef },
      { id: "projects", ref: projectsRef },
      { id: "skills", ref: skillsRef },
      { id: "contact", ref: contactRef },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          navigate(`/${sectionId}`); // Update the route
          document.title = sectionId.charAt(0).toUpperCase() + sectionId.slice(1); // Set document title
        }
      });
    }, observerOptions);

    // Observe each section
    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    // Cleanup observer on unmount
    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [navigate]);

  return (
    <div className="bg-[#310E68] select-none bg-gradient-to-tr from-[#310E68] to-[#070825] lg:px-5">
      <div className="max-w-screen-2xl mx-auto min-h-screen">
        <Navbar activeSection={activeSection} /> {/* Pass active section to Navbar for highlighting */}
        <Routes>
          {/* Render components within a catch-all route */}
          <Route
            path="/*"
            element={
              <>
                <div id="home" ref={headerRef}>
                  <Header />
                </div>
                <div id="projects" ref={projectsRef}>
                  <Projects />
                </div>
                <div id="skills" ref={skillsRef}>
                  <SkillSection />
                </div>
                <div id="contact" ref={contactRef}>
                  <Contact />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
