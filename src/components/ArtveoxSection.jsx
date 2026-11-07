import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const ArtveoxSection = () => {
  return (
    <section id="artveox" className="section-shell section-shell--muted artveox-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Featured client work"
          title="Artveox"
          description="An AI media app I built and launched for a freelance client."
        />

        <article className="case-study-card artveox-panel reveal-up">
          <div>
            <div className="case-study-head">
              <div>
                <p className="case-type">My role</p>
                <h3>Full-stack implementation</h3>
              </div>
              <a className="inline-link" href="https://artveox.ai/" target="_blank" rel="noreferrer">
                Visit the live product <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="case-content">
              <div>
                <h4>Web app and deployment</h4>
                <p>Built the app with Next.js and TypeScript, deployed it on Vercel, and stored generated media in Cloudflare R2.</p>
              </div>
              <div>
                <h4>Product integrations</h4>
                <p>Integrated Clerk for sign-in, Supabase for data, Razorpay for payments, and Replicate, HeyGen, and Deepgram for media workflows.</p>
              </div>
              <div>
                <h4>Video continuity</h4>
                <p>Worked on keeping characters consistent across clips in longer videos.</p>
              </div>
            </div>
          </div>

          <div className="artveox-preview">
            <p className="startup-tag">Video workflow</p>
            <h3>From 10-second clips to longer videos</h3>
            <ol className="artveox-workflow">
              <li>Generate short clips through media APIs.</li>
              <li>Coordinate the clip workflow with Trigger.dev.</li>
              <li>Join clips with FFmpeg and store the output in Cloudflare R2.</li>
            </ol>
            <div className="artveox-stack">
              <span>Tested with videos up to 5 minutes</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
