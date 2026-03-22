import { NextRequest, NextResponse } from 'next/server'
import { sendNotificationEmail } from '@/lib/resend'
import { appendToSheet } from '@/lib/sheets'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Basic validation
    const required = ['roasteryName', 'contactName', 'email', 'location']
    for (const field of required) {
      if (!data[field] || !String(data[field]).trim()) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send email and append to sheet in parallel
    const results = await Promise.allSettled([
      process.env.RESEND_API_KEY
        ? sendNotificationEmail(data)
        : Promise.resolve(),
      process.env.GOOGLE_SHEETS_SPREADSHEET_ID
        ? appendToSheet(data)
        : Promise.resolve(),
    ])

    // Log any failures but don't fail the request if at least one succeeded
    const failures = results.filter((r) => r.status === 'rejected')
    if (failures.length > 0) {
      console.error(
        'Partial submission failure:',
        failures.map((f) =>
          f.status === 'rejected' ? f.reason?.message : ''
        )
      )
    }

    // Only fail if both failed
    if (failures.length === results.length && results.length > 0) {
      throw new Error('All submission handlers failed')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
