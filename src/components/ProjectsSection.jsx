import { ArrowUpRight, Lock } from "lucide-react";
import { highlightedCaseStudies } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-shell section-shell--muted projects-shell">
      <div className="container project-layout">
        <aside className="project-rail reveal-up">
          <p className="eyebrow">Selected Work</p>
          <h3>Case studies with product stakes and technical depth.</h3>
          <p>
            I do not ship portfolio toys. I ship systems meant to be used, iterated, and trusted under real
            constraints.
          </p>
          <a className="inline-link" href="https://github.com/Shivam1817" target="_blank" rel="noreferrer">
            Explore GitHub <ArrowUpRight size={14} />
          </a>
        </aside>

        <div className="case-study-list">
          <SectionHeading
            eyebrow="Product Engineering"
            title="Designed to perform. Built to evolve."
            description="Each story captures context, execution role, technical decisions, and product relevance."
          />

          {highlightedCaseStudies.map((project, index) => (
            <article
              key={project.name}
              id={project.anchor}
              className="case-study-card reveal-up"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="case-study-head">
                <div>
                  <p className="case-type">{project.type}</p>
                  <h3>{project.name}</h3>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="inline-link">
                  Open product <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="case-content">
                <div>
                  <h4>What it is</h4>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <h4>What I built</h4>
                  <p>{project.built}</p>
                </div>
                <div>
                  <h4>Role</h4>
                  <p>{project.role}</p>
                </div>
                <div>
                  <h4>Why it matters</h4>
                  <p>{project.impact}</p>
                </div>
              </div>

              <ul className="stack-row">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <p className="repo-note">
                <Lock size={14} /> {project.repo}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
