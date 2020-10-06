require('dotenv').config()

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
        credentials: {
          "type": "service_account",
          "project_id": process.env.project_id,
          "private_key_id": process.env.private_key_id,
          "private_key": process.env.private_key,
          "client_email": process.env.client_email,
          "client_id": process.env.client_id,
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
          "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/forthequeen2%40for-the-queen-239501.iam.gserviceaccount.com"
        },
      },
    },
  ],
}
