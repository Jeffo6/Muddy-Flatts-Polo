import { useEffect } from 'react'

export const useSmoothScroll = (offset = 100) => {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      if (href?.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.scrollY - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [offset])
}
