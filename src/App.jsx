import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SkillSection from "./components/SkillSection";
import Certificate from "./components/Certificate";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path

  // Refs for each section
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Update document title, and active section based on scroll position
  useEffect(() => {
    const baseTitle = "Ritik Gupta | Portfolio"; 
    const sections = [
      { id: "home", ref: headerRef },
      { id: "projects", ref: projectsRef },
      { id: "skills", ref: skillsRef },
      { id: "contact", ref: contactRef },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          document.title = `${baseTitle} | ${
            sectionId.charAt(0).toUpperCase() + sectionId.slice(1)
          }`; // Update document title
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
    <div className="bg-[#310E68] select-none bg-gradient-to-tr from-[#310E68] to-[#070825] lg:px-5 ">
      <div className="max-w-screen-2xl mx-auto min-h-screen">
        {/* Conditionally render Navbar, hide it if the current path is "/certification" */}
        {location.pathname !== "/certification" && (
          <Navbar activeSection={activeSection} />
        )}
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
          {/* Certification page route */}
          <Route path="/certification" element={<Certificate />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
