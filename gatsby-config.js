module.exports = {
  siteMetadata: {
    title: `For The Queen SRD`,
    description: `For The Queen system reference document and licensing information.`,
    twitterUsername: `@evilhatofficial`,
    siteUrl: "https://forthequeengame.com",
    image: "/sharing.png",
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-7197503-6"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-plugin-emotion`,
  "gatsby-transformer-remark"]
};