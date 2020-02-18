const notFoundWhitelist = ['/speakers/profile/', '/about/', '/schedule/']
export const showNotFound = () => (
  typeof window !== 'undefined' &&
  window &&
  typeof window.location.pathname === 'string' &&
  notFoundWhitelist.filter(w => window.location.pathname.startsWith(w)).length === 0
)
