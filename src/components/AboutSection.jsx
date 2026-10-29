export default function AboutSection({ t }) {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'REST APIs', 'GitHub'];
  return <section className="about-band" id="about"><div className="wrap about-grid"><div data-aos="fade-right"><p className="eyebrow">A LITTLE ABOUT ME</p><h2>{t.aboutTitle}</h2></div>
    <div className="about-text" data-aos="fade-left" data-aos-delay="120"><p>{t.aboutOne}</p><p>{t.aboutTwo}</p><div className="skill-list">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>
  </div></section>;
}
