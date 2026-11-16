import { profile } from '../content.js'
import SplitFlapText from '../components/SplitFlapText.jsx'
import './About.css'

export default function About() {
  return (
    <section className="hero">
      <h1 className="hero__title">
        <SplitFlapText
          text={profile.headline}
          padTo={profile.headline.length}
          align="center"
          tileStyle="minimal"
          textColor="currentColor"
          charset="abcdefghijklmnopqrstuvwxyz"
          order="left"
          flipDuration={0.1}
          stagger={0.055}
          flipsPerChar={6}
          depth={0.35}
          gap="0.06em"
          fontSize="clamp(1.05rem, 4.4vw, 3rem)"
          intro
        />
      </h1>
      <p className="hero__blurb">{profile.blurb}</p>

      <div className="hero__links">
        <a className="hero__link" href={profile.linkedin} target="_blank" rel="noreferrer">
          <span className="hero__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95C20.4 8.75 21 11 21 14v7h-4v-6.2c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H9z" />
            </svg>
          </span>
          my linkedin profile
        </a>

        <a className="hero__link" href={`mailto:${profile.email}`}>
          <span className="hero__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2.5" y="4.5" width="19" height="15" />
              <path d="M2.5 6l9.5 7 9.5-7" />
            </svg>
          </span>
          my email
        </a>
      </div>

    </section>
  )
}
