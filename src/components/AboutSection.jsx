import { SectionHeading } from "./SectionHeading";

export const AboutSection = () => {
  return (
    <section id="about" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Builder Story"
          title="I build like a founder and execute like an engineer."
          description="I operate at the intersection of product, design, and engineering — turning rough ideas into usable systems people actually return to."
        />

        <div className="about-grid">
          <article className="info-card reveal-up">
            <h3>How I work</h3>
            <p>
              I prefer speed with structure. I ship a usable version early, capture signal quickly, and
              harden quality with each iteration. This is how I build startup products and client-facing
              systems without losing momentum.
            </p>
          </article>

          <article className="info-card reveal-up">
            <h3>What I optimize for</h3>
            <p>
              Clarity, performance, and trust. I care about interfaces that feel premium, codebases that
              stay maintainable, and decisions that survive beyond demo day.
            </p>
          </article>

          <article className="info-card reveal-up">
            <h3>What makes me useful</h3>
            <p>
              I can go from product framing to implementation across frontend, backend, and delivery.
              Whether it is an MVP, feature sprint, or product reset — I build, iterate, and ship.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
