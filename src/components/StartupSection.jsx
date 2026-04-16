import { ArrowUpRight, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const StartupSection = () => {
  return (
    <section id="startup" className="section-shell startup-hero-shell">
      <div className="container startup-layout">
        <div>
          <SectionHeading
            eyebrow="Founder Bet"
            title="Zeltha is a serious startup bet, not a portfolio bullet."
            description="I am building Zeltha with founder intensity: product strategy, systems architecture, and release velocity under one ownership loop."
          />
          <a className="button button--primary magnetic" href="#contact">
            <Rocket size={16} /> Partner on Zeltha direction
          </a>
        </div>

        <article className="startup-panel reveal-up">
          <div>
            <p className="startup-tag">Founder Build Mode</p>
            <h3>From thesis to shipped product loops.</h3>
            <p>
              Zeltha is the proving ground for long-term product conviction: fast iteration, disciplined
              architecture, and clear value delivery.
            </p>
            <a className="inline-link" href="#shipping">
              See shipping signal <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="startup-metrics">
            <div>
              <p>Cadence</p>
              <strong>Weekly product cycles</strong>
            </div>
            <div>
              <p>Ownership</p>
              <strong>Founder + Product + Engineering</strong>
            </div>
            <div>
              <p>North Star</p>
              <strong>Compounding product advantage</strong>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
