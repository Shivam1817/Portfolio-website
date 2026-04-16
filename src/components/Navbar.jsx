import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/siteContent";

export const Navbar = ({ onOpenPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`site-nav ${isScrolled ? "site-nav--scrolled" : ""}`}>
      <div className="container nav-inner">
        <a className="brand" href="#hero">
          <span className="brand-mark">S</span>
          <span>Shivam / Operator</span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <button type="button" className="command-pill" onClick={onOpenPalette}>
          <span>⌘K</span>
          <span>Commands</span>
        </button>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="mobile-menu-button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isMenuOpen ? (
          <div className="mobile-panel">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <button
              type="button"
              className="command-pill"
              onClick={() => {
                onOpenPalette();
                setIsMenuOpen(false);
              }}
            >
              <span>⌘K</span>
              <span>Commands</span>
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
};
