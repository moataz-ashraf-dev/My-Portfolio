const skills = ["React", "JavaScript", "CSS", "HTML", "Responsive design"];

export default function TechTicker() {
  return (
    <div className="technology-strip" aria-label="Core technologies">
      <div className="technology-strip-inner wrap">
        {skills.map((skill) => <span className="technology-item" key={skill}>{skill}</span>)}
      </div>
    </div>
  );
}
