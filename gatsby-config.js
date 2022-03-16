module.exports = {
  pathPrefix: "/camping",
  siteMetadata: {
      siteUrl: 'https://dalepalmer.dev',
      icon: './src/images/favicon.ico'
  },
  plugins: ["gatsby-plugin-styled-components",
    { resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `./src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
    }
  }
],
  
};