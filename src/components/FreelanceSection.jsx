import { ArrowUpRight, ShieldCheck, TimerReset, Zap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const FreelanceSection = () => {
  return (
    <section id="freelance" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Freelance / Operator for Hire"
          title="Available for high-value product engineering engagements."
          description="Best fit for founders and teams that need full-stack execution with premium frontend quality, clear communication, and steady delivery momentum."
        />

        <article className="freelance-panel reveal-up">
          <div className="freelance-points">
            <p>
              <Zap size={16} /> Builder cadence with weekly shipping checkpoints
            </p>
            <p>
              <ShieldCheck size={16} /> Product-quality UX + maintainable code + clean handoff
            </p>
            <p>
              <TimerReset size={16} /> Async-friendly collaboration and fast iteration loops
            </p>
            <p>
              <ArrowUpRight size={16} /> Current example: ArtveoX ongoing creator-platform engagement
            </p>
          </div>
          <a
            href="https://www.upwork.com/freelancers/~013b125c7396dc3ed2"
            target="_blank"
            rel="noreferrer"
            className="button button--primary magnetic"
          >
            Hire via Upwork <ArrowUpRight size={16} />
          </a>
        </article>
      </div>
    </section>
  );
};
