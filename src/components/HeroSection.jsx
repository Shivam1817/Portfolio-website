import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, TerminalSquare } from "lucide-react";
import portrait from "../assets/shivam.jpg";
import { heroKeywords, heroMetadata, heroStats, heroSystemCards, statusSignals } from "../data/siteContent";
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
            <p className="eyebrow">Builder / Founder / Product Engineer</p>
            <p className="hero-kicker">Not another safe landing page. This is the active build console.</p>
            <h1 className="hero-title">
              <span className="hero-title-lead">I build</span>
              <PretextBlock lines={["products with", "founder energy", heroKeywords[activeKeyword]]} />
            </h1>
            <p className="hero-subtitle">
              I turn rough ideas into software with product taste, technical depth, and a bias toward visible
              progress. From founder bets to freelance systems, I like code that ships and interfaces that hit.
            </p>

            <div className="hero-proof-grid">
              {heroStats.map((item) => (
                <div key={item.label} className="hero-proof-card">
                  <span className="hero-proof-value">{item.value}</span>
                  <span className="hero-proof-label">{item.label}</span>
                </div>
              ))}
            </div>

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
                <div>
                  <p className="hero-card-label">Operator Feed</p>
                  <strong>Building with product taste, not just code volume.</strong>
                </div>
                <span className="case-type">Live</span>
              </div>
            </article>

            <div className="hero-code-card terminal-card">
              <div className="terminal-header">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <p>mission-control.sh</p>
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

            <article className="hero-signal-card">
              {heroSystemCards.map((card) => (
                <div key={card.label} className="hero-signal-row">
                  <span>{card.label}</span>
                  <strong>{card.value}</strong>
                </div>
              ))}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
