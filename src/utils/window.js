export const getLocation = () => typeof window !== 'undefined' && window.location
export const getLocationPathname = () => typeof window !== 'undefined' && window.location.pathname
export const getLocationHash = () => typeof window !== 'undefined' && window.location.hash
export const getScreenWidth = () => typeof window !== 'undefined' && (window.innerWidth > 0 ? window.innerWidth : window.screen.width)
export const windowExists = () => typeof window !== 'undefined' && window
