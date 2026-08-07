import { Routes, Route } from 'react-router-dom'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useRouteScroll } from './hooks/useRouteScroll'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import MuddyFlatts from './pages/MuddyFlatts'
import TarloHill from './pages/TarloHill'
import About from './pages/About'
import OurHeritage from './pages/OurHeritage'
import NotFound from './pages/NotFound'
import './App.scss'

function App() {
  useSmoothScroll(100)
  useRouteScroll(100)

  return (
    <>
      {/* First tab stop — lets keyboard users skip the nav on every route */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/muddy-flatts" element={<MuddyFlatts />} />
          <Route path="/tarlo-hill" element={<TarloHill />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-heritage" element={<OurHeritage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
