import { experienceItems } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-shell section-shell--muted">
      <div className="container">
        <SectionHeading
          title="Engineering experience"
        />

        <div className="timeline">
          {experienceItems.map((item, index) => (
            <article key={item.org} className="timeline-card reveal-up" style={{ animationDelay: `${index * 80}ms` }}>
              <div className="timeline-head">
                <h3>{item.org}</h3>
                {item.period && <span>{item.period}</span>}
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
