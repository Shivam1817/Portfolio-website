import { ArrowUpRight, Rocket } from "lucide-react";
import { startupRunway } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export const StartupSection = () => {
  return (
    <section id="startup" className="section-shell startup-hero-shell">
      <div className="container startup-layout">
        <div className="startup-copy">
          <SectionHeading
            eyebrow="Founder Bet"
            title="Zeltha is a serious startup bet, not a portfolio bullet."
            description="I am building Zeltha with founder intensity: product strategy, systems architecture, interface direction, and release velocity under one ownership loop."
          />
          <div className="startup-cta-band reveal-up">
            <p className="startup-tag">Open to aligned collaborators</p>
            <a className="button button--primary magnetic" href="#contact">
              <Rocket size={16} /> Partner on Zeltha direction
            </a>
            <span>Best fit: founders, early believers, and teams that care about product sharpness.</span>
          </div>
        </div>

        <article className="startup-panel reveal-up">
          <div className="startup-panel-copy">
            <p className="startup-tag">Founder Build Mode</p>
            <h3>From conviction to weekly product loops.</h3>
            <p>
              Zeltha is the proving ground for long-term product conviction: fast iteration, disciplined
              architecture, and clear value delivery. I want the site to feel like that same energy: deliberate,
              technical, and impossible to confuse with a generic template.
            </p>
            <a className="inline-link" href="#shipping">
              See shipping signal <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="startup-launch-grid">
            {startupRunway.map((lane) => (
              <div key={lane.id} className="startup-lane">
                <span>{lane.id}</span>
                <strong>{lane.title}</strong>
                <p>{lane.detail}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};
