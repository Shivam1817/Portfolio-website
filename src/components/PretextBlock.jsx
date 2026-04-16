export const PretextBlock = ({ lines, className = "" }) => {
  return (
    <span className={`pretext-block ${className}`.trim()} aria-label={lines.join(" ")}>
      {lines.map((line) => (
        <span key={line} className="pretext-line">
          {line}
        </span>
      ))}
    </span>
  );
};
