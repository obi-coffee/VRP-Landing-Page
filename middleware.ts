import { NextResponse, type NextRequest } from 'next/server'
import { GATE_COOKIE, GATE_TOKEN } from './lib/gate'

export function middleware(request: NextRequest) {
  if (request.cookies.get(GATE_COOKIE)?.value === GATE_TOKEN) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = '/gate'
  url.search = ''
  return NextResponse.redirect(url)
}

export const config = {
  // Everything except the gate itself, its API, Next internals,
  // and static files (anything with a file extension).
  matcher: ['/((?!gate|api/gate|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
