import { experience } from '../content.js'
import './Pages.css'

export default function Experience() {
  return (
    <div className="page">
      <h1 className="page__title">experience</h1>

      {experience.map((job, i) => (
        <article key={i} className="entry">
          {job.logo && (
            <img className="entry__logo" src={job.logo} alt={`${job.org} logo`} />
          )}
          <div className="entry__head">
            <h2 className="entry__role">
              {job.role} <span className="entry__org">· {job.org}</span>
            </h2>
            <span className="entry__dates">{job.dates}</span>
          </div>
          <ul className="entry__bullets">
            {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>

          {job.skills?.length > 0 && (
            <ul className="skills">
              {job.skills.map((skill) => (
                <li key={skill} className="skill">{skill}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  )
}
