import { useCallback, useEffect, useState } from 'react'
import './MediaCarousel.css'

/**
 * A small image/gif carousel with a click-to-zoom lightbox.
 *
 * items: [{ src, alt }]  — a bare string is also accepted.
 * Arrows + dots only appear when there is more than one item.
 */
export default function MediaCarousel({ items = [], aspect = '4 / 3' }) {
  // Accept a list, or a single string/object, so a stray value can't crash the page.
  const slides = (Array.isArray(items) ? items : [items])
    .map((item) => (typeof item === 'string' ? { src: item } : item))
    .filter((item) => item?.src)

  const [index, setIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const count = slides.length

  const go = useCallback(
    (delta) => setIndex((i) => (i + delta + count) % count),
    [count]
  )

  // Keyboard control while the lightbox is open, plus a scroll lock.
  useEffect(() => {
    if (!zoomed) return

    const onKey = (e) => {
      if (e.key === 'Escape') setZoomed(false)
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }

    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [zoomed, go])

  if (count === 0) return null

  const current = slides[index]

  return (
    <>
      <div className="carousel" style={{ '--carousel-aspect': aspect }}>
        <button
          type="button"
          className="carousel__frame"
          onClick={() => setZoomed(true)}
          aria-label={`Open larger view of ${current.alt ?? 'image'}`}
        >
          <img className="carousel__img" src={current.src} alt={current.alt ?? ''} loading="lazy" />
        </button>

        {count > 1 && (
          <>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--prev"
              onClick={() => go(-1)}
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--next"
              onClick={() => go(1)}
              aria-label="Next image"
            >
              &#8250;
            </button>

            <div className="carousel__dots">
              {slides.map((slide, i) => (
                <button
                  type="button"
                  key={slide.src}
                  className={i === index ? 'carousel__dot is-active' : 'carousel__dot'}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to image ${i + 1} of ${count}`}
                  aria-current={i === index}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {zoomed && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image"
          onClick={() => setZoomed(false)}
        >
          <button type="button" className="lightbox__close" aria-label="Close">
            &times;
          </button>

          {count > 1 && (
            <>
              <button
                type="button"
                className="lightbox__arrow lightbox__arrow--prev"
                onClick={(e) => { e.stopPropagation(); go(-1) }}
                aria-label="Previous image"
              >
                &#8249;
              </button>
              <button
                type="button"
                className="lightbox__arrow lightbox__arrow--next"
                onClick={(e) => { e.stopPropagation(); go(1) }}
                aria-label="Next image"
              >
                &#8250;
              </button>
            </>
          )}

          {/* stopPropagation so clicking the image itself doesn't close it */}
          <img
            className="lightbox__img"
            src={current.src}
            alt={current.alt ?? ''}
            onClick={(e) => e.stopPropagation()}
          />

          {current.alt && <p className="lightbox__caption">{current.alt}</p>}
        </div>
      )}
    </>
  )
}
