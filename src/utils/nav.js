import { getLocationPathname } from './window'

export const pageIsActive = pageHref => {
  if (typeof window === 'undefined') {
    return pageHref === '/'
  }
  const locationPathname = getLocationPathname()
  // console.group('LeftNav pageIsActive')
  // console.log(locationPathname)
  // console.log(pageHref)
  // console.log(locationPathname.startsWith(pageHref))
  // console.log(
  //   locationPathname === pageHref ||
  //     (pageHref !== '/' &&
  //     locationPathname !== '/' &&
  //     typeof locationPathname === 'string'
  //       ? locationPathname.startsWith(pageHref)
  //       : false)
  // )
  // console.groupEnd()
  return (
    locationPathname === pageHref ||
    (pageHref !== '/' &&
    locationPathname !== '/' &&
    typeof locationPathname === 'string'
      ? locationPathname.startsWith(pageHref)
      : false)
  )
}
