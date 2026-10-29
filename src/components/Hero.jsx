export default function Hero({ t, palette }) {
  const lines = palette === "blue" ? t.blueHeroLines : t.warmHeroLines;

  return (
    <section className="hero wrap" id="home">
      <div className="hero-copy" data-aos="fade-up" data-aos-duration="900">
        <p className="eyebrow"><span className="pulse" />{t.availability}</p>
        <h1>
          <span>{lines[0]}</span><br />
          <span>{lines[1]}</span><br />
          <em>{lines[2]}</em>
        </h1>
        <p className="intro">{t.intro}</p>
        <div className="hero-actions">
          <a className="button" href="#work">{t.explore}</a>
          <a className="text-link" href="#contact">{t.talk}</a>
        </div>
        <div className="hero-meta"><span>HTML · CSS · JS · REACT</span><span>ALEXANDRIA, EGYPT</span></div>
      </div>

      <div className="portrait-wrap" data-aos="zoom-in" data-aos-duration="900" data-aos-delay="120">
        <div className="portrait-backdrop" aria-hidden="true" />
        <div className="portrait-frame">
          <img src="/assets/moataz-ashraf.jpg" alt={t.photoAlt} />
          <div className="portrait-caption">
            <strong>Moataz Ashraf</strong>
            <span>{t.role}</span>
          </div>
        </div>
        <div className="portrait-note"><span className="note-dot" />{t.learning}</div>
      </div>
    </section>
  );
}
