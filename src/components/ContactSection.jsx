import { Mail, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-shell section-shell--muted">
      <div className="container">
        <SectionHeading
          eyebrow="Contact / Conversion"
          title="If you want a site and product presence with real voltage, let’s talk."
          description="Open to startup collaborations, freelance product work, and engineering roles where execution quality and velocity both matter."
        />

        <article className="contact-panel reveal-up">
          <div className="contact-panel-copy">
            <h3>Need founder-speed execution with product eyes?</h3>
            <p>
              I work best with people who care about momentum, craft, and building something that does not feel
              replaceable.
            </p>
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
          </div>

          <div className="contact-command-card">
            <p>
              <span className="prompt">$</span> start-collab --type startup|freelance|role
            </p>
            <p className="output">response-time: fast</p>
            <p className="output">preferred-mode: async + decisive</p>
            <p className="output">goal: build something that feels alive</p>
            <a href="mailto:shivam.chem21@gmail.com" className="button button--primary magnetic">
              <Mail size={16} /> Start a project conversation
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
