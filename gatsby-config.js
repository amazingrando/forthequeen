require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `For The Queen SRD`,
    description: `For The Queen system reference document and licensing information.`,
    twitterUsername: `@evilhatofficial`,
    siteUrl: 'https://forthequeengame.com',
    image: '/sharing.png',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-7197503-6',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        credentials: process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS ? 
          JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS) : 
          null,
        range: 'A:H'
      }
    },
    `gatsby-plugin-emotion`,
    'gatsby-transformer-remark',
  ],
};
