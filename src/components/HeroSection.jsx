import { ArrowRight, TerminalSquare } from "lucide-react";
import { PretextBlock } from "./PretextBlock";

export const HeroSection = ({ onOpenPalette }) => {
  return (
    <section id="hero" className="hero-section section-shell">
      <div className="container hero-grid">
        <div className="hero-copy reveal-up">
          <p className="eyebrow">Developer • Founder • Freelance Product Partner</p>
          <h1 className="hero-title">
            <PretextBlock
              lines={["I design systems.", "I ship products.", "I build with intent."]}
            />
          </h1>
          <p className="hero-subtitle">
            I build products, not just apps — from startup bets to production software with clear UX,
            robust engineering, and fast iteration loops.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#projects">
              Explore Case Studies <ArrowRight size={16} />
            </a>
            <button type="button" className="button button--ghost" onClick={onOpenPalette}>
              <TerminalSquare size={16} /> Open Command Palette
            </button>
          </div>
        </div>

        <div className="terminal-card reveal-up">
          <div className="terminal-header">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <p>operator.log</p>
          </div>
          <div className="terminal-body">
            <p>
              <span className="prompt">$</span> identity --who
            </p>
            <p className="output">Shivam // Full-stack engineer with frontend precision.</p>
            <p>
              <span className="prompt">$</span> now --building
            </p>
            <p className="output">Zeltha · MyEmozion · high-performance client products</p>
            <p>
              <span className="prompt">$</span> mode --execution
            </p>
            <p className="output">Ship fast. Learn quickly. Raise the quality bar each sprint.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
