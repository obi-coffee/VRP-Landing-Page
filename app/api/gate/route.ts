import { NextRequest, NextResponse } from 'next/server'
import { GATE_COOKIE, GATE_PASSWORD, GATE_TOKEN } from '@/lib/gate'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (typeof password !== 'string' || password.trim().toLowerCase() !== GATE_PASSWORD) {
      return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
    }

    const response = NextResponse.json({ success: true })
    response.cookies.set(GATE_COOKIE, GATE_TOKEN, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    })
    return response
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}
