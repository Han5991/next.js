import { NextResponse, type NextMiddleware } from 'next/server'

export const middleware: NextMiddleware = async (req) => {
  const url = req.nextUrl
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/favicon')
  ) {
    return NextResponse.next()
  }

  // NOTE: This re-write causes the segment prefetch to fail
  return NextResponse.rewrite(new URL(`/en${url.pathname}`, req.url))
}
