module.exports = {
  siteMetadata: {
    title: `Agência Sagittarius`,
    description: `Utilize a tecnologia para ter resultados de outro mundo!`,
    author: `@agencia.sagittarius`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NM9C7PJ",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `@hutsoninc/gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1359240221566713",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#171717`,
        theme_color: `#1f3a93`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },

    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        www: true,
        ErrorDocument: `
          ErrorDocument 404 /error_pages/404.html
        `,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
