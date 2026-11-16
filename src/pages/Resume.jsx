import { resume } from '../content.js'
import './Resume.css'

export default function Resume() {
  return (
    <div className="resume">
      <object className="resume__frame" data={resume} type="application/pdf">
        {/* Shown when the browser cannot display a PDF inline (most phones). */}
        <div className="resume__fallback">
          <p className="muted">Your browser can&rsquo;t display the PDF inline.</p>
          <a className="resume__link" href={resume} target="_blank" rel="noreferrer">
            open resume &#8599;
          </a>
        </div>
      </object>

      <a className="resume__download" href={resume} download>
        download pdf &#8595;
      </a>
    </div>
  )
}
