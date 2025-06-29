const { google } = require('googleapis');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }, pluginOptions) => {
  const { createNode } = actions;
  const { spreadsheetId, credentials, range = 'A:H' } = pluginOptions;

  if (!spreadsheetId) {
    throw new Error('spreadsheetId is required for gatsby-source-google-sheets');
  }

  if (!credentials) {
    throw new Error('credentials are required for gatsby-source-google-sheets');
  }

  try {
    let auth;
    
    // Check if credentials are service account credentials
    if (credentials.type === 'service_account') {
      // Service account authentication
      auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
      });
    } else if (credentials.installed || credentials.web) {
      // OAuth 2.0 client credentials - we need to use a different approach
      console.log('⚠️  OAuth 2.0 credentials detected. For production use, consider using service account credentials.');
      console.log('📋 To use service account credentials:');
      console.log('   1. Go to Google Cloud Console > APIs & Services > Credentials');
      console.log('   2. Create a new Service Account');
      console.log('   3. Download the JSON key file');
      console.log('   4. Replace your credentials.json with the service account JSON');
      
      // For now, we'll use a simple API key approach or throw an error
      throw new Error('OAuth 2.0 credentials are not supported. Please use service account credentials instead.');
    } else {
      throw new Error('Invalid credentials format. Please use service account credentials.');
    }

    const sheets = google.sheets({ version: 'v4', auth });

    // Fetch data from Google Sheets
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;
    
    if (!rows || rows.length === 0) {
      console.log('No data found in Google Sheets.');
      return;
    }

    // Get headers from first row
    const headers = rows[0];
    
    // Process data rows (skip header row)
    rows.slice(1).forEach((row, index) => {
      // Create an object with headers as keys
      const gameData = {};
      headers.forEach((header, i) => {
        gameData[header] = row[i] || '';
      });

      // Create Gatsby node
      const node = {
        id: createNodeId(`google-sheet-${index}`),
        internal: {
          type: 'GoogleSheet',
          contentDigest: createContentDigest(gameData),
        },
        ...gameData,
      };

      createNode(node);
    });

    console.log(`Successfully fetched ${rows.length - 1} rows from Google Sheets`);
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    throw error;
  }
}; 