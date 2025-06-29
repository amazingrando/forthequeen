#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Google Sheets integration for For The Queen...\n');

console.log('📋 To complete the setup, you need to:');
console.log('');
console.log('1. Create a Google Cloud Project:');
console.log('   - Go to https://console.cloud.google.com/');
console.log('   - Create a new project or select an existing one');
console.log('');
console.log('2. Enable the Google Sheets API:');
console.log('   - Go to APIs & Services > Library');
console.log('   - Search for "Google Sheets API" and enable it');
console.log('');
console.log('3. Create a Service Account (IMPORTANT - not OAuth client):');
console.log('   - Go to APIs & Services > Credentials');
console.log('   - Click "Create Credentials" > "Service Account"');
console.log('   - Fill in the details and create the account');
console.log('   - ⚠️  Do NOT create OAuth 2.0 Client ID credentials');
console.log('');
console.log('4. Download the Service Account credentials:');
console.log('   - Click on your service account');
console.log('   - Go to the "Keys" tab');
console.log('   - Click "Add Key" > "Create new key" > "JSON"');
console.log('   - Download the JSON file');
console.log('   - This file should contain "type": "service_account"');
console.log('');
console.log('5. Create credentials.json:');
console.log('   - Copy the downloaded service account JSON file to the root of this project');
console.log('   - Rename it to "credentials.json"');
console.log('   - The file should start with: {"type":"service_account",...}');
console.log('');
console.log('6. Share your Google Sheet:');
console.log('   - Open your Google Sheet');
console.log('   - Click "Share"');
console.log('   - Add your service account email (found in the credentials as "client_email")');
console.log('   - Give it "Viewer" permissions');
console.log('');
console.log('7. Set the environment variable:');
console.log('   - Create a .env file in the root directory');
console.log('   - Add: GOOGLE_SHEET_ID=your-spreadsheet-id');
console.log('   - The spreadsheet ID is in the URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit');
console.log('');
console.log('8. Install dependencies:');
console.log('   npm install');
console.log('');
console.log('9. Test the setup:');
console.log('   npm run develop');
console.log('');

// Check if credentials.json exists
const credentialsPath = path.join(__dirname, 'credentials.json');
if (!fs.existsSync(credentialsPath)) {
  console.log('❌ credentials.json not found. Please follow step 5 above.');
} else {
  console.log('✅ credentials.json found!');
  
  // Check if it's a service account credentials file
  try {
    const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));
    if (credentials.type === 'service_account') {
      console.log('✅ Service account credentials detected!');
    } else if (credentials.installed || credentials.web) {
      console.log('❌ OAuth 2.0 credentials detected. Please use service account credentials instead.');
      console.log('   Follow step 3 above to create a service account.');
    } else {
      console.log('❌ Unknown credentials format. Please use service account credentials.');
    }
  } catch (error) {
    console.log('❌ Error reading credentials.json. Please check the file format.');
  }
}

// Check if .env exists
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  console.log('❌ .env file not found. Please follow step 7 above.');
} else {
  console.log('✅ .env file found!');
}

console.log('\n🎉 Once you\'ve completed all steps, your site will pull data directly from Google Sheets!'); 