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
import { SignalMeshBackground } from "../components/SignalMeshBackground";

const MAGNETIC_SELECTOR = ".magnetic";

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
      { rootMargin: "-38% 0px -45% 0px", threshold: 0.15 }
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

    const handleScroll = () => {
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / maxScroll, 1);
      document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(3));
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const magneticElements = Array.from(document.querySelectorAll(MAGNETIC_SELECTOR));

    const handlers = magneticElements.map((element) => {
      const move = (event) => {
        const rect = element.getBoundingClientRect();
        const offsetX = (event.clientX - rect.left - rect.width / 2) * 0.14;
        const offsetY = (event.clientY - rect.top - rect.height / 2) * 0.22;
        element.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
      };
      const leave = () => {
        element.style.transform = "translate3d(0, 0, 0)";
      };

      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", leave);
      return { element, move, leave };
    });

    return () => {
      handlers.forEach(({ element, move, leave }) => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", leave);
      });
    };
  }, []);

  return (
    <div className="app-shell">
      <SignalMeshBackground />
      <div className="noise-layer" aria-hidden="true" />
      <div className="grid-layer" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="scan-line" aria-hidden="true" />
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
