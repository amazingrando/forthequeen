[![Netlify Status](https://api.netlify.com/api/v1/badges/fbe86879-f7e5-447e-be98-ccdf4d3d39c3/deploy-status)](https://app.netlify.com/sites/forthequeen/deploys)

# For the Queen System Reference Document Website

## Where to find the SRD text files?

- Inside of `src/pages`. They are in markdown (.md).

## Requirements

- [Node](https://nodejs.org/en/)
- [Gatsby](https://www.gatsbyjs.org/)

## Google Sheets Integration

This site now pulls game data directly from Google Sheets instead of a CSV file. To set up the Google Sheets integration:

1. Run the setup script: `npm run setup-google-sheets`
2. Follow the detailed instructions provided by the script
3. You'll need to:
   - Create a Google Cloud Project
   - Enable the Google Sheets API
   - Create a Service Account
   - Download credentials and save as `credentials.json`
   - Share your Google Sheet with the service account
   - Set the `GOOGLE_SHEET_ID` environment variable

## How to Run Locally

- `npm install` to install packages
- `gatsby develop` to spin up a local server that you can access at localhost.

## How to Deploy

- `gatsby build` to build the static site
- Upload to a server.
