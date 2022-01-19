/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/styles/global.css'

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  const { pathname } = location
  const scrollToTopRoutes = ['/about/venue-and-hotel', '/about/topic-tables', '/about/jobs', '/about/faq']
  if (scrollToTopRoutes.indexOf(pathname) === -1) {
    window.scrollTo(0, 0)
  }
  return false
}
