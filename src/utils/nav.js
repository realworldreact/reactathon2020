import { getLocationPathname } from './window'

export const pageIsActive = pageHref => {
  if (typeof window === 'undefined') {
    return false
  }
  const locationPathname = getLocationPathname()
  return (
    locationPathname === pageHref ||
    (pageHref !== '/' &&
    locationPathname !== '/' &&
    typeof locationPathname === 'string'
      ? locationPathname.startsWith(pageHref)
      : false)
  )
}
