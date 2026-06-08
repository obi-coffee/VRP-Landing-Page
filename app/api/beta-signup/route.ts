import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { appendToSheet } from '@/lib/sheets'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !String(email).trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const results = await Promise.allSettled([
      process.env.RESEND_API_KEY
        ? sendBetaNotification(email)
        : Promise.resolve(),
      process.env.GOOGLE_SHEETS_SPREADSHEET_ID
        ? appendToSheet({ type: 'beta-signup', email, submittedAt: new Date().toISOString() })
        : Promise.resolve(),
    ])

    const failures = results.filter((r) => r.status === 'rejected')
    if (failures.length > 0) {
      console.error(
        'Beta signup partial failure:',
        failures.map((f) =>
          f.status === 'rejected' ? f.reason?.message : ''
        )
      )
    }

    if (failures.length === results.length && results.length > 0) {
      throw new Error('All submission handlers failed')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Beta signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function sendBetaNotification(email: string) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.NOTIFICATION_EMAIL || 'obi@tastcoffee.com'

  await resend.emails.send({
    from: 'tāst Beta <onboarding@resend.dev>',
    to,
    subject: `New Beta Signup: ${email}`,
    text: `New beta tester signup!\n\nEmail: ${email}\nSubmitted at: ${new Date().toISOString()}`,
  })
}
