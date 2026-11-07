import { Mail, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-shell section-shell--muted">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="I’m based in India and available for fully remote frontend and full-stack roles. My schedule can include India daytime hours."
        />

        <article className="contact-panel reveal-up">
          <div className="contact-links">
            <a href="https://github.com/Shivam1817" target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub <ArrowUpRight size={14} />
            </a>
            <a href="https://www.linkedin.com/in/shivam1817/" target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
          <div>
            <a href="mailto:shivam.chem21@gmail.com" className="button button--primary magnetic">
              <Mail size={16} /> Email Shivam
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
