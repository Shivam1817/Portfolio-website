import { buildLogs } from "../data/siteContent";
import { SectionHeading } from "./SectionHeading";

export const BuildLogsSection = () => {
  return (
    <section id="logs" className="section-shell section-shell--muted">
      <div className="container">
        <SectionHeading
          eyebrow="Build Logs"
          title="What I am actively refining right now."
          description="A quick snapshot of current experiments and execution priorities."
        />

        <div className="logs-grid">
          {buildLogs.map((log, index) => (
            <article key={log.title} className="log-card reveal-up" style={{ animationDelay: `${index * 120}ms` }}>
              <p className="eyebrow">Log {String(index + 1).padStart(2, "0")}</p>
              <h3>{log.title}</h3>
              <p>{log.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
