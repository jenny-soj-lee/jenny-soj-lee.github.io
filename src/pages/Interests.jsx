import { interests, photos } from '../content.js'
import CircularGallery from '../components/CircularGallery.jsx'
import './Pages.css'

export default function Interests() {
  return (
    <div className="page page--wide">
      <h1 className="page__title">interests</h1>

      {interests.map((item, i) => (
        <section key={i} className="section">
          <h2 className="entry__role">{item.title}</h2>
          <p className="muted">{item.body}</p>

          {item.gallery === 'photos' && photos.length > 0 && (
            <div className="gallery">
              <CircularGallery
                items={photos}
                bend={2.2}
                itemAspect={1.4}
                itemSize={0.95}
                textColor="#111111"
                borderRadius={0.04}
                shadow={0.18}
                font="500 22px Inter"
                fontUrl="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
              />
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
