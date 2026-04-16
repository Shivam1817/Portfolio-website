import { ArrowUpRight, Lock } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const ArtveoxSection = () => {
  return (
    <section id="artveox" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Flagship Freelance Product"
          title="ArtveoX — AI creator platform for video, image, and music generation."
          description="Ongoing freelance product engagement focused on unifying creator generation workflows into a cleaner, production-ready experience."
        />

        <article className="case-study-card reveal-up">
          <div className="case-study-head">
            <div>
              <p className="case-type">Ongoing freelance project</p>
              <h3>ArtveoX</h3>
            </div>
            <a className="inline-link" href="https://artveox.vercel.app/" target="_blank" rel="noreferrer">
              Visit live product <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="case-content">
            <div>
              <h4>Problem</h4>
              <p>
                Creators need faster, more flexible ways to produce high-quality outputs without juggling
                disconnected generation tools.
              </p>
            </div>
            <div>
              <h4>What I&apos;m building</h4>
              <p>
                An AI-powered platform for video, image, and music generation that supports a unified,
                creator-first workflow from idea to output.
              </p>
            </div>
            <div>
              <h4>Role</h4>
              <p>
                Ongoing freelance product development across product experience, frontend execution, and
                platform shaping.
              </p>
            </div>
            <div>
              <h4>Stack surface</h4>
              <p>
                Next.js, Supabase, Razorpay, Stripe, Replicate, Clerk, Cloudflare R2, Prisma/PostgreSQL.
              </p>
            </div>
          </div>

          <p className="repo-note">
            <Lock size={14} /> Private repository — implementation details intentionally constrained.
          </p>
        </article>
      </div>
    </section>
  );
};
