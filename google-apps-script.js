// ============================================
// GOOGLE APPS SCRIPT FOR LEXGO SOLUTIONS
// ============================================
// This script handles:
// 1. Saving form data to Google Sheet
// 2. Sending email notification to Owner
// ============================================
//
// HOW TO SET UP:
// 1. Go to Google Sheets and create a new spreadsheet
// 2. Name it "LexGo Solutions - Contact Form Submissions"
// 3. In the first row, add these headers:
//    A1: Full Name | B1: Work Email | C1: Phone Number | D1: Company Name | E1: Timestamp
// 4. Go to Extensions > Apps Script
// 5. Delete any existing code and paste this entire script
// 6. Update the OWNER_EMAIL below with the actual email
// 7. Click Save (Ctrl+S)
// 8. Click Deploy > New deployment
// 9. Select type: Web app
// 10. Execute as: Me
// 11. Who has access: Anyone
// 12. Click Deploy
// 13. Copy the Web app URL and add it to your .env.local file as OWNER_GOOGLE_SCRIPT_URL
// ============================================

// CONFIGURATION
const OWNER_EMAIL = "chandanguptabsb@gmail.com";

function doPost(e) {
  try {
    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Create timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long'
    });

    // Append data to Google Sheet
    sheet.appendRow([
      data.fullName,
      data.workEmail,
      data.phoneNumber,
      data.companyName,
      timestamp
    ]);

    // Send email notification to Owner
    const emailSubject = "New Contact Form Submission - LexGo Solutions";

    const emailBody = `
Hello,

You have received a new contact form submission from LexGo Solutions website.

SUBMISSION DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full Name: ${data.fullName}
Work Email: ${data.workEmail}
Phone Number: ${data.phoneNumber}
Company Name: ${data.companyName}
Submitted At: ${timestamp}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

View all submissions in your Google Sheet:
${SpreadsheetApp.getActiveSpreadsheet().getUrl()}

Best regards,
LexGo Solutions Notification System
    `;

    // Send the email
    MailApp.sendEmail({
      to: OWNER_EMAIL,
      subject: emailSubject,
      body: emailBody
    });

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Form data saved and email sent successfully"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - you can run this to test if the script is working
function testScript() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        fullName: "Test User",
        workEmail: "test@example.com",
        phoneNumber: "+1234567890",
        companyName: "Test Company"
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
