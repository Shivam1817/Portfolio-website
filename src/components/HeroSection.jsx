import { ArrowRight } from "lucide-react";
import portrait from "../assets/shivam.jpg";
import { heroStats } from "../data/siteContent";

export const HeroSection = () => {
  return (
    <section id="hero" className="hero-section section-shell">
      <div className="container hero-grid">
        <div className="hero-copy reveal-up">
          <p className="eyebrow">Shivam · India</p>
          <h1 className="hero-title">
            Full-stack <span>engineer</span>
          </h1>
          <p className="hero-subtitle">
            I build web products with React, Next.js, TypeScript, and FastAPI. I built and launched Artveox,
            an AI media product, and developed data services for trading software.
          </p>
          <p className="hero-kicker">
            Open to fully remote frontend and full-stack roles from India. Flexible hours, including India daytime.
          </p>

          <div className="hero-actions">
            <a className="button button--primary magnetic" href="#artveox">
              Read the Artveox case study <ArrowRight size={16} />
            </a>
            <a className="button button--ghost magnetic" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="hero-proof-grid">
            {heroStats.map((item) => (
              <div key={item.value} className="hero-proof-card">
                <span className="hero-proof-value">{item.value}</span>
                <span className="hero-proof-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-stage reveal-up">
          <div className="hero-stage-orbit" aria-hidden="true">
            <span className="orbit-ring orbit-ring--one" />
            <span className="orbit-ring orbit-ring--two" />
            <span className="orbit-ring orbit-ring--three" />
          </div>
          <article className="hero-portrait-card">
            <div className="hero-portrait-frame">
              <img src={portrait} alt="Shivam standing outdoors" />
            </div>
            <div className="hero-portrait-caption">
              <strong>Shivam</strong>
              <span className="case-type">IIT Guwahati · 2025</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
