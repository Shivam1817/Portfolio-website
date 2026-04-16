import { useEffect } from "react";
import { commandItems } from "../data/siteContent";

export const CommandPalette = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return undefined;
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="palette-overlay" role="dialog" aria-modal="true" aria-label="Command palette">
      <div className="palette-card">
        <div className="palette-header">
          <span>Command Palette</span>
          <kbd>esc</kbd>
        </div>
        <ul className="palette-list">
          {commandItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                onClick={onClose}
              >
                <span>{item.label}</span>
                <kbd>{item.shortcut}</kbd>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
