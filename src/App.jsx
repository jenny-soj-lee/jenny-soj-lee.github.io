import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { accentFor } from './nav.js'
import NavBar from './components/NavBar.jsx'
import About from './pages/About.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import Interests from './pages/Interests.jsx'
import Resume from './pages/Resume.jsx'

export default function App() {
  const { pathname } = useLocation()

  return (
    // --accent is the current section's color; any page can use var(--accent).
    <div className="site" style={{ '--accent': accentFor(pathname) }}>
      <NavBar />
      <main className="main">
        <Routes>
          {/* About is the landing page */}
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}
