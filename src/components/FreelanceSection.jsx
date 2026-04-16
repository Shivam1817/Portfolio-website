import { ArrowUpRight, ShieldCheck, TimerReset, Zap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const FreelanceSection = () => {
  return (
    <section id="freelance" className="section-shell section-shell--muted">
      <div className="container">
        <SectionHeading
          eyebrow="Freelance / Upwork"
          title="Available for serious product work."
          description="I partner with founders and teams who need speed without sacrificing product quality. Best fit: MVPs, growth features, and frontend-heavy systems with full-stack ownership."
        />

        <article className="freelance-panel reveal-up">
          <div className="freelance-points">
            <p>
              <Zap size={16} /> Fast shipping cadence with clear weekly deliverables
            </p>
            <p>
              <ShieldCheck size={16} /> Clean code, maintainable architecture, and handoff-ready output
            </p>
            <p>
              <TimerReset size={16} /> High responsiveness and async-first collaboration
            </p>
          </div>
          <a
            href="https://www.upwork.com/freelancers/~013b125c7396dc3ed2"
            target="_blank"
            rel="noreferrer"
            className="button button--primary"
          >
            Hire via Upwork <ArrowUpRight size={16} />
          </a>
        </article>
      </div>
    </section>
  );
};
