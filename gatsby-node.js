// gatsby-node.js
// Implement the Gatsby API “onCreatePage”.
// This is called after every page is created.

const pageRouteMap = [{
  match: /^\/speakers\/profile/
  matchPath: '/speakers/profile/*'
}]

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  console.log('page', page)
  if (page.path.match(/^\/speakers\/profile/)) {
    page.matchPath = "/speakers/profile/*"

    // Update the page.
    createPage(page)
  }
}
