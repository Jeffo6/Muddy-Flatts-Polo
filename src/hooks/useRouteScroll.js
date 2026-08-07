import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router keeps the scroll position across navigations. Reset to the top
// on a new route, or jump to the target section when the link carried a hash.
export const useRouteScroll = (offset = 100) => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
        return
      }
    }

    window.scrollTo({ top: 0 })
  }, [pathname, hash, offset])
}
