import { useEffect, useState } from "react";
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

export const Home = () => {
  const [paletteOpen, setPaletteOpen] = useState(false);

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

  return (
    <div className="app-shell">
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <HeroSection onOpenPalette={() => setPaletteOpen(true)} />
        <AboutSection />
        <ExperienceSection />
        <StartupSection />
        <ProjectsSection />
        <ShippingSection />
        <FreelanceSection />
        <ContactSection />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
};
