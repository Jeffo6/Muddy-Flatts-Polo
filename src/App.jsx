import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useRouteScroll } from './hooks/useRouteScroll'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import './App.scss'

// Home stays in the main bundle — it's the landing page, so deferring it would
// only add a round-trip for the most-visited route. The interior pages are
// split out and fetched on navigation.
const MuddyFlatts = lazy(() => import('./pages/MuddyFlatts'))
const TarloHill = lazy(() => import('./pages/TarloHill'))
const Activity = lazy(() => import('./pages/Activity'))
const About = lazy(() => import('./pages/About'))
const OurHeritage = lazy(() => import('./pages/OurHeritage'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Holds the page height steady while a lazy chunk loads so the footer doesn't
// jump up the screen mid-navigation.
function RouteFallback() {
  return <div className="route-fallback" role="status" aria-live="polite" aria-label="Loading" />
}

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
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/muddy-flatts" element={<MuddyFlatts />} />
            {/* Activity pages share one template; `property` scopes the lookup
                so a slug can't resolve against the wrong property */}
            <Route path="/muddy-flatts/:slug" element={<Activity property="muddy-flatts" />} />
            <Route path="/tarlo-hill" element={<TarloHill />} />
            <Route path="/tarlo-hill/:slug" element={<Activity property="tarlo-hill" />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-heritage" element={<OurHeritage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  )
}

export default App
