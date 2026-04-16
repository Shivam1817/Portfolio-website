import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const StartupSection = () => {
  return (
    <section id="startup" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Startup Spotlight"
          title="Zeltha — founder-led, product-obsessed, execution-first."
          description="Zeltha is where I push startup velocity with engineering depth: define the thesis, design the product, ship the system, and iterate from real user behavior."
        />

        <article className="startup-panel reveal-up">
          <div>
            <p className="startup-tag">Founder Build Mode</p>
            <h3>From concept to compounding product advantage.</h3>
            <p>
              I treat Zeltha like a living system: rapid product loops, clean architecture decisions,
              and relentless clarity on what creates user value. It is not just a side project — it is
              a startup engine.
            </p>
            <a className="inline-link" href="#contact">
              Discuss Zeltha and collaboration <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="startup-metrics">
            <div>
              <p>Execution</p>
              <strong>Founder + Engineer</strong>
            </div>
            <div>
              <p>Operating style</p>
              <strong>Weekly shipping cadence</strong>
            </div>
            <div>
              <p>Focus</p>
              <strong>Product + Growth + System Quality</strong>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
