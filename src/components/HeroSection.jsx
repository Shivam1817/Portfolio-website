import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, TerminalSquare } from "lucide-react";
import { heroMetadata } from "../data/siteContent";
import { PretextBlock } from "./PretextBlock";

export const HeroSection = ({ onOpenPalette }) => {
  const [activeMeta, setActiveMeta] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMeta((prev) => (prev + 1) % heroMetadata.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero-section section-shell">
      <div className="container hero-grid">
        <div className="hero-copy reveal-up">
          <p className="eyebrow">Operator / Builder / Founder</p>
          <h1 className="hero-title">
            <PretextBlock
              lines={[
                "I build products,",
                "not just apps.",
                "Fast, sharp, production-ready.",
              ]}
            />
          </h1>
          <p className="hero-subtitle">
            Full-stack product engineer with frontend taste. I ship startup bets, freelance platforms,
            and technical systems that are built to move — and built to last.
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

        <div className="terminal-card reveal-up">
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
              <span className="prompt">$</span> execution --mode
            </p>
            <p className="output">Concept → prototype → system hardening → release loops.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
