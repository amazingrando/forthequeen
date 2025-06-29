# Gatsby Source Google Sheets

This plugin fetches data from Google Sheets and creates Gatsby nodes.

## Setup

1. Create a Google Cloud Project
2. Enable the Google Sheets API
3. Create a Service Account
4. Download the service account credentials JSON file
5. Share your Google Sheet with the service account email

## Configuration

Add the plugin to your `gatsby-config.js`:

```javascript
{
  resolve: 'gatsby-source-google-sheets',
  options: {
    spreadsheetId: 'your-spreadsheet-id',
    credentials: require('./path/to/credentials.json'),
    range: 'A:H' // optional, defaults to A:H
  }
}
```

## Credentials Format

Your credentials JSON should look like this:

```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "your-private-key-id",
  "private_key": "-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n",
  "client_email": "your-service-account@your-project-id.iam.gserviceaccount.com",
  "client_id": "your-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/your-service-account%40your-project-id.iam.gserviceaccount.com"
}
```

## Usage

The plugin creates nodes of type `GoogleSheet` that you can query with GraphQL:

```graphql
query {
  allGoogleSheet {
    nodes {
      Timestamp
      Do_not_add_to_site
      Title_of_your_game
      Description_of_the_game_
      Link_to_where_people_can_find_the_game
      Author
      Game_status
      Email_Address
    }
  }
}
``` 