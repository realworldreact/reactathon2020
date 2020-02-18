// gatsby-node.js
// Implement the Gatsby API “onCreatePage”.
// This is called after every page is created.

const speakerProfilePage = {
  match: /^\/speakers\/profile/,
  matchPath: '/speakers/profile/*'
}

const aboutPage = {
  match: /^\/about/,
  matchPath: '/about/*'
}

const schedulePage  = {
  match: /^\/schedule/,
  matchPath: '/schedule/*'
}

const createPageHandler = ({ page, matchPath, createPage }) => {
  //page.matchPath = matchPath
  // Update the page.
  //createPage(page)
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.

  if (page.path.match(speakerProfilePage.match)) {
    createPageHandler({
      createPage,
      page,
      matchPath: speakerProfilePage.matchPath
    })
  }

  if (page.path.match(aboutPage.match)) {
    createPageHandler({
      createPage,
      page,
      matchPath: aboutPage.matchPath
    })
  }

  if (page.path.match(schedulePage.match)) {
    createPageHandler({
      createPage,
      page,
      matchPath: schedulePage.matchPath
    })
  }
}
