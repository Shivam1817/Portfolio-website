import { experienceItems } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-shell section-shell--muted">
      <div className="container">
        <SectionHeading
          eyebrow="Companies / Collaborations"
          title="Built across startups, teams, and product environments."
          description="From infra-heavy intern roles to founder-led execution, I have worked across multiple contexts and shipped with urgency."
        />

        <div className="timeline">
          {experienceItems.map((item) => (
            <article key={item.org} className="timeline-card reveal-up">
              <div className="timeline-head">
                <h3>{item.org}</h3>
                <span>{item.period}</span>
              </div>
              <p className="timeline-role">{item.role}</p>
              <p className="timeline-summary">{item.summary}</p>
              <ul>
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
