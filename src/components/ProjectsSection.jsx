import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-shell section-shell--muted">
      <div className="container">
        <SectionHeading
          eyebrow="Case Studies"
          title="Selected builds with product intent and technical rigor."
          description="Each project is scoped as a real product challenge: identify friction, architect cleanly, and ship measurable user-facing outcomes."
        />

        <div className="case-study-list">
          {caseStudies.map((project) => (
            <article key={project.name} className="case-study-card reveal-up">
              <div className="case-study-head">
                <div>
                  <p className="case-type">{project.type}</p>
                  <h3>{project.name}</h3>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="inline-link">
                  View source <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="case-content">
                <div>
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <h4>What I built</h4>
                  <p>{project.built}</p>
                </div>
                <div>
                  <h4>Impact</h4>
                  <p>{project.impact}</p>
                </div>
              </div>

              <ul className="stack-row">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
