import { achievements } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export const AboutSection = () => {
  return (
    <section id="about" className="section-shell">
      <div className="container about-layout">
        <SectionHeading
          eyebrow="About"
          title="Frontend and backend development"
          description="I graduated from IIT Guwahati in 2025 and build web applications with React and TypeScript. I also work on the services that power them, from FastAPI endpoints to database and media integrations."
        />

        <aside className="achievement-panel reveal-up">
          <h3>Tools I work with</h3>
          <div className="achievement-grid">
            {achievements.map((item) => (
              <span key={item} className="achievement-chip">
                {item}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};
