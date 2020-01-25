module.exports = {
  siteMetadata: {
    title: 'Reactathon 2020',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-transformer-json',
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `./src/assets/data`,
        },
      },
    ],
};
