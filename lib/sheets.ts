import { google } from 'googleapis'

export async function appendToSheet(data: Record<string, string>) {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
    /\\n/g,
    '\n'
  )
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error('Google Sheets credentials not configured')
  }

  const auth = new google.auth.JWT(clientEmail, undefined, privateKey, [
    'https://www.googleapis.com/auth/spreadsheets',
  ])

  const sheets = google.sheets({ version: 'v4', auth })

  const row = [
    new Date().toISOString(),
    data.roasteryName || '',
    data.contactName || '',
    data.email || '',
    data.phone || '',
    data.location || '',
    data.website || '',
    data.instagram || '',
    data.yearFounded || '',
    data.hearAbout || '',
    data.interest || '',
    data.notes || '',
  ]

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A:L',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [row] },
  })
}
