const EDUCATION = [
  {
    school: "Holberton University",
    url: "https://www.asu.edu/",
    degree: "Bachelors of Software Engineering",
    coursework: [
      "Distributed Database Systems",
      "Cloud Computing",
      "Foundations of Algorithms",
    ],
  },
  {
    school: "Addis Ababa University",
    url: "https://ahduni.edu.in/academics/schools-centres/school-of-engineering-and-applied-science/",
    location: "Addis Ababa, Ethiopia",
    degree: "Bachelor of Computer Science",
    coursework: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "System Adminstration",
      "Object Oriented Programming",
    ],
  },
];

export default function EducationList() {
  return (
    <div className="about-block" id="education-block">
      <div className="about-block-kicker">Academics</div>
      <h2 className="about-block-title">Education</h2>
      <div className="edu-grid">
        {EDUCATION.map((entry) => (
          <article className="about-panel edu-card" key={entry.school}>
            <h3>
              <a href={entry.url} target="_blank" rel="noreferrer">
                {entry.school}
              </a>
            </h3>
            {entry.location && <p className="edu-place">{entry.location}</p>}
            <p className="edu-degree">
              <b>Degree:</b> {entry.degree}
            </p>
            <div className="edu-coursework">
              <b>Relevant Courseworks:</b>
              <ul>
                {entry.coursework.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
