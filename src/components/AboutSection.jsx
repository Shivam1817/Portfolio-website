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
            title="I optimize for momentum, clarity, and product-grade execution."
            description="I think like a founder, build like a product engineer, and care deeply about how systems feel in real hands — not just in screenshots."
          />

          <div className="operator-strip">
            <span>Operating now</span>
            <PretextBlock lines={operatingNow.slice(0, 2)} className="operator-lines" />
          </div>
        </div>

        <aside className="achievement-panel reveal-up">
          <h3>Signal, not noise</h3>
          <ul>
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};
