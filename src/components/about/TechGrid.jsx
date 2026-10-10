import { SKILL_GROUPS } from "../../data/skills.js";

export default function TechGrid() {
  return (
    <div className="about-block" id="tech-grid-block">
      <div className="about-block-kicker">Stack</div>
      <h2 className="about-block-title">Technologies</h2>
      {SKILL_GROUPS.map((group) => (
        <div className="tech-group" key={group.heading}>
          <h4 className="tech-group-title">{group.heading}</h4>
          <div className="tech-grid">
            {group.items.map((item) => (
              <div className="tech-item" key={item.name}>
                <img src={item.icon} alt={item.name} loading="lazy" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
