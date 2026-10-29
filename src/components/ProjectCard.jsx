import { IoArrowUpOutline, IoOpenOutline } from "react-icons/io5";

export default function ProjectCard({ project, index, arabic }) {
  const title = arabic ? project.titleAr : project.title;
  const type = arabic ? project.typeAr : project.type;
  const description = arabic ? project.descriptionAr : project.description;
  const label = arabic ? project.labelAr : project.label;
  const isLive = /^https?:\/\//i.test(project.url);
  const projectArt = (
    <div
      className={`project-art${project.image || isLive ? " project-art--media" : ""}`}
    >
      {project.image ? (
        <img
          className="project-cover-image"
          src={project.image}
          alt={`${title} preview`}
          loading="lazy"
        />
      ) : isLive ? (
        <div className="project-live-frame" aria-hidden="true">
          <iframe
            src={project.url}
            title={`${title} live preview`}
            loading="lazy"
            tabIndex={-1}
          />
        </div>
      ) : null}
      {project.image || isLive ? (
        <span className="project-art-overlay" aria-hidden="true" />
      ) : null}
      <span className="art-mark">0{index + 1} / CASE STUDY</span>
      {isLive ? <span className="project-live-badge">LIVE PREVIEW</span> : null}
      <span className="art-label">{title}</span>
      {!project.image && !isLive ? (
        <span className="art-shape" aria-hidden="true" />
      ) : null}
    </div>
  );

  return (
    <article
      data-aos="fade"
      data-aos-delay={index * 100}
      className={`project-card project-card-hover project-card-${index + 1}`}
    >
      <div data-aos="fade-up-right" className="project-card-content">
        {isLive ? (
          <a
            className="project-art-link"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${label}: ${title}`}
          >
            {projectArt}
          </a>
        ) : (
          projectArt
        )}
        <div className="project-info">
          <span className="project-kicker">{type}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="tags">
            {project.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a
            className={`project-link${isLive ? " is-live" : " is-upcoming"}`}
            href={project.url}
            target={isLive ? "_blank" : undefined}
            rel={isLive ? "noreferrer" : undefined}
          >
            <span>{label}</span>
            {isLive ? (
              <IoOpenOutline aria-hidden="true" />
            ) : (
              <IoArrowUpOutline
                className="project-link-arrow"
                aria-hidden="true"
              />
            )}
          </a>
        </div>
      </div>
    </article>
  );
}
