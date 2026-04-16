export const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <header className="mb-10 space-y-4">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </header>
  );
};
