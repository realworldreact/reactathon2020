import { getLocationPathname } from './window'

export const isActive = (pageHref) => {
  if (typeof window === undefined) {
    return false
  }
  const locationPathname = getLocationPathname()
  return locationPathname === pageHref || (
    pageHref !== '/' &&
    locationPathname !== '/' &&
    typeof locationPathname === 'string'
      ? locationPathname.startsWith(pageHref)
      : false
  )
}
