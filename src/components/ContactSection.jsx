import { Mail, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-shell section-shell--muted">
      <div className="container">
        <SectionHeading
          eyebrow="Contact / Conversion"
          title="If you are serious about shipping, let’s talk."
          description="Open to startup collaborations, freelance product work, and engineering roles where execution quality and velocity both matter."
        />

        <article className="contact-panel reveal-up">
          <a href="mailto:shivam.chem21@gmail.com" className="button button--primary magnetic">
            <Mail size={16} /> Start a project conversation
          </a>
          <div className="contact-links">
            <a href="https://github.com/Shivam1817" target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub <ArrowUpRight size={14} />
            </a>
            <a href="https://www.linkedin.com/in/shivam1817/" target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href="https://artveox.vercel.app/" target="_blank" rel="noreferrer">
              ArtveoX Live <ArrowUpRight size={14} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
