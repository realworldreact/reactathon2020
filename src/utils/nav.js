import { getLocationPathname } from './window'

export const pageIsActive = pageHref => {
  if (typeof window === 'undefined') {
    return pageHref === '/'
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
