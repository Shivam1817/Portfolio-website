import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, TerminalSquare } from "lucide-react";
import { heroKeywords, heroMetadata, statusSignals } from "../data/siteContent";
import { PretextBlock } from "./PretextBlock";

export const HeroSection = ({ onOpenPalette }) => {
  const [activeMeta, setActiveMeta] = useState(0);
  const [activeKeyword, setActiveKeyword] = useState(0);

  useEffect(() => {
    const metaTimer = setInterval(() => {
      setActiveMeta((prev) => (prev + 1) % heroMetadata.length);
    }, 2400);

    const keywordTimer = setInterval(() => {
      setActiveKeyword((prev) => (prev + 1) % heroKeywords.length);
    }, 1800);

    return () => {
      clearInterval(metaTimer);
      clearInterval(keywordTimer);
    };
  }, []);

  return (
    <section id="hero" className="hero-section section-shell">
      <div className="container">
        <div className="status-strip reveal-up" aria-label="Current operating signals">
          <div className="status-track">
            {[...statusSignals, ...statusSignals].map((signal, index) => (
              <span key={`${signal}-${index}`}>{signal}</span>
            ))}
          </div>
        </div>

        <div className="hero-grid">
          <div className="hero-copy reveal-up">
            <p className="eyebrow">Operator / Builder / Founder</p>
            <h1 className="hero-title">
              <PretextBlock lines={["I build", "real", heroKeywords[activeKeyword]]} />
            </h1>
            <p className="hero-subtitle">
              Shipping ideas into real products — from interface to infrastructure. I design and build
              systems with startup speed, technical depth, and product-level polish.
            </p>

            <div className="meta-rotator" aria-live="polite">
              <Sparkles size={14} />
              <span>{heroMetadata[activeMeta]}</span>
            </div>

            <div className="hero-actions">
              <a className="button button--primary magnetic" href="#projects">
                View Selected Work <ArrowRight size={16} />
              </a>
              <button type="button" className="button button--ghost magnetic" onClick={onOpenPalette}>
                <TerminalSquare size={16} /> Open Command Palette
              </button>
            </div>
          </div>

          <div className="terminal-card reveal-up terminal-card--hero">
            <div className="terminal-header">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <p>operator-status.live</p>
            </div>
            <div className="terminal-body">
              <p>
                <span className="prompt">$</span> focus --current
              </p>
              <p className="output">Zeltha + ArtveoX + high-value freelance product delivery</p>
              <p>
                <span className="prompt">$</span> strength --stack
              </p>
              <p className="output">React · Next.js · TypeScript · Node.js · FastAPI · Docker</p>
              <p>
                <span className="prompt">$</span> status --momentum
              </p>
              <p className="output">Build quickly, harden quality, repeat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
