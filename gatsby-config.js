module.exports = {
  siteMetadata: {
    title: `Cronje Empyre`,
    description: `Andreas “Cronje” Michael Strand (SE) & Matt “Empyre” (NZ) met for the first time at a techno party in Stockholm, Sweden. It was here they were to develop a new kind of friendship together that would shape the foundations for the newly started but over 15 years experienced DJ & production duo partnership.`,
    author: `Matt Empyre`,
    keywords:
      'Cronje Empyre, DJ Cronje Empyre, Matt Empyre, Cronje, Techno, Producer, Dance Music, Sweden, New Zealand, Melodic',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CronjeEmpyre`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'dy87x7vh060i',
        accessToken: 'Wq-m1tnyxq7pjXcyEPIa7CJoQmIhi0BnWc7ss6T9mBs',
      },
    },
  ],
}
