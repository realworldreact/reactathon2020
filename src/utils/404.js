const notFoundWhitelist = ['/speakers/profile/', '/about/', '/schedule/']
export const showNotFound = () => (
  typeof window !== 'undefined' &&
  window &&
  typeof window.location.pathname === 'string' &&
  (
      !window.location.pathname.startsWith('/speakers/profile/') &&
      !window.location.pathname.startsWith('/about/') &&
      !window.location.pathname.startsWith('/schedule/')
  )
)
