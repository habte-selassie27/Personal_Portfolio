import { EXPERIENCES } from "../../data/experience.js";

export default function ExperienceCards() {
  return (
    <div className="about-block" id="experience-block">
      <div className="about-block-kicker">Career</div>
      <h2 className="about-block-title">Experience</h2>
      {EXPERIENCES.map((exp) => (
        <article className="about-panel exp-card" key={exp.role + exp.date}>
          <div className="exp-card-head">
            <img className="exp-logo" src={exp.logo} alt={exp.role} loading="lazy" />
            <div className="exp-heading">
              <h3 className="exp-role">
                {exp.url ? (
                  <a href={exp.url} target="_blank" rel="noreferrer">
                    {exp.role}
                  </a>
                ) : (
                  exp.role
                )}
              </h3>
              {exp.company && <span className="exp-company">{exp.company}</span>}
            </div>
            <span className="exp-date">{exp.date}</span>
          </div>
          <hr />
          <ul>
            {exp.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <p className="exp-tools">
            <b>Tools:</b> {exp.tools}
          </p>
        </article>
      ))}
    </div>
  );
}
