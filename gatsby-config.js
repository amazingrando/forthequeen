module.exports = {
  siteMetadata: {
    title: `For The Queen SRD`,
    description: `For The Queen system reference document and licensing information.`,
    twitterUsername: `@evilhatofficial`,
    url: "https://forthequeengame.com",
    image: "/sharing.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
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
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        dir: "auto",
        lang: "en-US",
        theme_color: "#663399",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-7197503-6",
        respectDNT: false,
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true,
        www: false,
      },
    },
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "1bkubC3K04PKg3OH0dQTf8ZRcMcZpmAQGwwiHxFgmgug",
        worksheetTitle: "Form-Responses-1",
        credentials: require("./src/env/For-The-Queen-3f3deedb6442.json"),
      },
    },
  ],
}
