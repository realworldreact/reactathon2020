module.exports = {
  siteMetadata: {
    title: 'Reactathon 2020',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/assets/data',
      },
    },
  ],
}
