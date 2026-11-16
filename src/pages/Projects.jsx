import { projects } from '../content.js'
import MediaCarousel from '../components/MediaCarousel.jsx'
import './Pages.css'

export default function Projects() {
  return (
    <div className="page">
      <h1 className="page__title">projects</h1>

      <div className="cards">
        {projects.map((p, i) => (
          <article key={i} className="card">
            {p.media?.length > 0 && <MediaCarousel items={p.media} />}
            <h2 className="card__title">
              {p.href
                ? <a href={p.href} target="_blank" rel="noreferrer">{p.name}</a>
                : p.name}
            </h2>
            <p className="card__blurb muted">{p.blurb}</p>
            {p.tags?.length > 0 && (
              <ul className="tags">
                {p.tags.map((t) => <li key={t} className="tag">{t}</li>)}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
