/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/styles/global.css'

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  const { pathname } = location
  const notScrollToTopRoutes = [
    '/about/venue-and-hotel', '/about/topic-tables', '/about/jobs', '/about/faq',
    '/about/faq/general', '/about/faq/safety', '/about/faq/workshops', '/about/faq/amenities', '/about/faq/logistics', '/about/faq/policies'
  ]
  if (notScrollToTopRoutes.indexOf(pathname) === -1) {
    window.scrollTo(0, 0)
  }
  return false
}
