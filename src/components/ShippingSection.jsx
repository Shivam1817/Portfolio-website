import { ArrowUpRight, GitBranchPlus, GitCommitHorizontal, Package } from "lucide-react";
import { githubStats } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

const activityCells = [3, 1, 4, 2, 5, 2, 4, 3, 5, 1, 2, 4, 5, 3, 4, 2, 5, 4, 2, 1, 3, 4, 5, 2, 3];

export const ShippingSection = () => {
  return (
    <section id="shipping" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Shipping Dashboard"
          title="Proof of build consistency, presented with intent."
          description="A cleaner signal layer for founders, recruiters, and collaborators evaluating execution reliability."
        />

        <div className="shipping-grid">
          <article className="shipping-terminal reveal-up">
            <p>
              <span className="prompt">$</span> gh profile --summary
            </p>
            <p className="output">username: Shivam1817</p>
            <p className="output">mode: product-first engineering</p>
            <p className="output">focus: shipping useful systems over cosmetic complexity</p>
            <a href="https://github.com/Shivam1817" target="_blank" rel="noreferrer" className="inline-link">
              Open GitHub profile <ArrowUpRight size={15} />
            </a>
          </article>

          <div className="shipping-stats">
            {githubStats.map((stat) => (
              <article key={stat.label} className="stat-card reveal-up">
                <p>{stat.label}</p>
                <strong>{stat.value}</strong>
              </article>
            ))}
          </div>
        </div>

        <div className="activity-grid reveal-up" aria-label="Custom activity surface">
          {activityCells.map((cell, index) => (
            <span key={`${cell}-${index}`} data-level={cell} />
          ))}
        </div>

        <div className="signal-row reveal-up">
          <div>
            <GitCommitHorizontal size={16} /> Consistent commits and iteration cycles
          </div>
          <div>
            <GitBranchPlus size={16} /> Ongoing product experiments and refactors
          </div>
          <div>
            <Package size={16} /> MVP to production execution mindset
          </div>
        </div>
      </div>
    </section>
  );
};
