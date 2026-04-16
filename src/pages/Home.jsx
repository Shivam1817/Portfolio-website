import { useEffect, useMemo, useState } from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { StartupSection } from "../components/StartupSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ShippingSection } from "../components/ShippingSection";
import { FreelanceSection } from "../components/FreelanceSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { CommandPalette } from "../components/CommandPalette";
import { BuildLogsSection } from "../components/BuildLogsSection";
import { ArtveoxSection } from "../components/ArtveoxSection";

export const Home = () => {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = useMemo(
    () => ["hero", "about", "projects", "startup", "artveox", "experience", "shipping", "freelance", "contact"],
    []
  );

  useEffect(() => {
    const handler = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const handleMove = (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div className="app-shell">
      <div className="noise-layer" aria-hidden="true" />
      <div className="grid-layer" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <Navbar onOpenPalette={() => setPaletteOpen(true)} activeSection={activeSection} />
      <main>
        <HeroSection onOpenPalette={() => setPaletteOpen(true)} />
        <AboutSection />
        <ProjectsSection />
        <StartupSection />
        <ArtveoxSection />
        <ExperienceSection />
        <ShippingSection />
        <BuildLogsSection />
        <FreelanceSection />
        <ContactSection />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
};
