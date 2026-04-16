import { ArrowUpRight, GitBranchPlus, GitCommitHorizontal, Package } from "lucide-react";
import { githubStats } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export const ShippingSection = () => {
  return (
    <section id="shipping" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="GitHub / Shipping Velocity"
          title="Public proof that I build consistently."
          description="No noisy widgets. Just clean signals: repository breadth, stack depth, and a product-minded shipping rhythm."
        />

        <div className="shipping-grid">
          <article className="shipping-terminal reveal-up">
            <p>
              <span className="prompt">$</span> gh profile --summary
            </p>
            <p className="output">username: Shivam1817</p>
            <p className="output">signal: full-stack product builder</p>
            <p className="output">focus: React, Next.js, Node.js, TypeScript, backend APIs</p>
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

        <div className="signal-row reveal-up">
          <div>
            <GitCommitHorizontal size={16} /> Consistent code-first execution
          </div>
          <div>
            <GitBranchPlus size={16} /> Product experiments across domains
          </div>
          <div>
            <Package size={16} /> MVP to production mindset
          </div>
        </div>
      </div>
    </section>
  );
};
