import { ArrowUpRight, Lock } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const ArtveoxSection = () => {
  return (
    <section id="artveox" className="section-shell section-shell--muted artveox-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Flagship Freelance Product"
          title="ArtveoX — AI-powered creator platform for video, image, and music workflows."
          description="Ongoing freelance build focused on giving content creators a more unified path from idea to production-ready output."
        />

        <article className="case-study-card reveal-up">
          <div className="case-study-head">
            <div>
              <p className="case-type">Ongoing freelance engagement</p>
              <h3>ArtveoX</h3>
            </div>
            <a className="inline-link" href="https://artveox.vercel.app/" target="_blank" rel="noreferrer">
              Visit live product <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="case-content">
            <div>
              <h4>What it is</h4>
              <p>
                A creator-focused AI platform that supports generation workflows across video, image, and
                music in a single product surface.
              </p>
            </div>
            <div>
              <h4>What I&apos;m building</h4>
              <p>
                Workflow shaping, frontend execution, and product-level UX quality for faster creator output
                without fragmented tooling.
              </p>
            </div>
            <div>
              <h4>Why it matters</h4>
              <p>
                Creators need reliable utility, not scattered tools. ArtveoX pushes toward a unified creative
                operating layer.
              </p>
            </div>
            <div>
              <h4>Stack surface</h4>
              <p>Next.js, Supabase, Razorpay, Stripe, Replicate, Clerk, Cloudflare R2, Prisma/PostgreSQL.</p>
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
