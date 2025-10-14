import { useState, useEffect } from 'react'

/**
 * Hook personalizado para detectar media queries
 * @param {string} query - La media query CSS (ej: '(max-width: 768px)')
 * @returns {boolean} - true si la media query coincide, false si no
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Crear el objeto MediaQueryList
    const media = window.matchMedia(query)
    
    // Actualizar el estado inicial
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    
    // Listener para cambios
    const listener = (e) => setMatches(e.matches)
    
    // Agregar listener (compatible con navegadores modernos y antiguos)
    if (media.addEventListener) {
      media.addEventListener('change', listener)
    } else {
      media.addListener(listener)
    }
    
    // Cleanup
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', listener)
      } else {
        media.removeListener(listener)
      }
    }
  }, [matches, query])

  return matches
}

export default useMediaQuery

