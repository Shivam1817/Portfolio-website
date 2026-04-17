export const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <header className="section-heading reveal-up">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </header>
  );
};
