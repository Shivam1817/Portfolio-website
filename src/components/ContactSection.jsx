import { Mail, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something that ships and matters."
          description="If you are building a product, launching an MVP, or leveling up a frontend experience, I can help you move fast with quality."
        />

        <article className="contact-panel reveal-up">
          <a href="mailto:shivam.chem21@gmail.com" className="button button--primary">
            <Mail size={16} /> shivam.chem21@gmail.com
          </a>
          <div className="contact-links">
            <a href="https://github.com/Shivam1817" target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub <ArrowUpRight size={14} />
            </a>
            <a href="https://www.linkedin.com/in/shivam1817/" target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
