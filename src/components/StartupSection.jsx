import { ArrowUpRight, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const StartupSection = () => {
  return (
    <section id="startup" className="section-shell">
      <div className="container startup-layout">
        <div>
          <SectionHeading
            eyebrow="Founder Bet"
            title="Zeltha is not a side project. It is a conviction build."
            description="I am building Zeltha with founder urgency: shaping the thesis, shipping product loops, and compounding technical leverage sprint after sprint."
          />
          <a className="button button--primary magnetic" href="#contact">
            <Rocket size={16} /> Build with me on Zeltha
          </a>
        </div>

        <article className="startup-panel reveal-up">
          <div>
            <p className="startup-tag">Founder Build Mode</p>
            <h3>Execution stack: product direction + system design + shipping cadence.</h3>
            <p>
              Zeltha is where I practice long-range product thinking with short iteration cycles — balancing
              quality, momentum, and clear user value.
            </p>
            <a className="inline-link" href="#shipping">
              See execution signals <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="startup-metrics">
            <div>
              <p>Cadence</p>
              <strong>Weekly shipping loops</strong>
            </div>
            <div>
              <p>Ownership</p>
              <strong>Founder + Product + Engineering</strong>
            </div>
            <div>
              <p>Focus</p>
              <strong>Utility, clarity, and compounding product quality</strong>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
