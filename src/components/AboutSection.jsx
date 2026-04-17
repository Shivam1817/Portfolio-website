import { achievements, operatingNow } from "../data/siteContent";
import { PretextBlock } from "./PretextBlock";
import { SectionHeading } from "./SectionHeading";

export const AboutSection = () => {
  return (
    <section id="about" className="section-shell">
      <div className="container about-layout">
        <div>
          <SectionHeading
            eyebrow="Builder Philosophy"
            title="I care about momentum as much as I care about quality."
            description="I operate where product thinking meets execution: define the problem, design the experience, ship the system, and iterate from real signal."
          />

          <div className="operator-strip">
            <span>Operating now</span>
            <PretextBlock lines={operatingNow.slice(0, 3)} className="operator-lines" />
          </div>
        </div>

        <aside className="achievement-panel reveal-up">
          <p className="case-type">Credibility Surface</p>
          <h3>Signal that backs the aesthetic.</h3>
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
