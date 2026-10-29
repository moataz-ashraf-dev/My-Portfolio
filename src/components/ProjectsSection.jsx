import ProjectCard from "./ProjectCard.jsx";
import projects from "../data/projects.js";

export default function ProjectsSection({ t, arabic }) {
  return (
    <section className="section wrap" id="work">
      <div className="section-head">
        <div>
          <p className="eyebrow">SELECTED WORK / 2025—26</p>
          <h2>{t.projectsTitle}</h2>
        </div>
        <p className="section-aside">{t.projectsIntro}</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            project={project}
            index={index}
            arabic={arabic}
          />
        ))}
      </div>
    </section>
  );
}
