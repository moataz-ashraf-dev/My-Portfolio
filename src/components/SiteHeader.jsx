import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import ThemeControls from "./ThemeControls.jsx";

export default function SiteHeader({
  t,
  arabic,
  onLanguageToggle,
  palette,
  onPaletteToggle,
  dark,
  onDarkToggle,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="topbar wrap">
      <a className="wordmark" href="#home" aria-label="Moataz Ashraf home" onClick={closeMenu}>
        <span className="mark">MA</span>
        <span>MOATAZ<span className="muted">.DEV</span></span>
      </a>

      <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label={t.mainNavigation}>
        <a href="#work" onClick={closeMenu}>{t.work}</a>
        <a href="#about" onClick={closeMenu}>{t.about}</a>
        <a href="#contact" onClick={closeMenu}>{t.contact}</a>
      </nav>

      <div className="header-actions">
        <ThemeControls
          t={t}
          palette={palette}
          onPaletteToggle={onPaletteToggle}
          dark={dark}
          onDarkToggle={onDarkToggle}
        />
        <button className="lang-toggle" onClick={onLanguageToggle} aria-label={t.languageAction} title={t.languageAction}>
          {arabic ? "EN" : "عربي"}
        </button>
        <a className="button button-small resume-link" href="/assets/Moataz_Ashraf_Awad_Frontend_Resume.pdf" target="_blank" rel="noreferrer" aria-label={t.resume}>
          <span className="resume-full">{t.resume}</span><span className="resume-short">CV</span>
        </a>
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? t.closeMenu : t.openMenu}
          title={menuOpen ? t.closeMenu : t.openMenu}
        >
          {menuOpen ? <IoCloseOutline aria-hidden="true" /> : <IoMenuOutline aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
