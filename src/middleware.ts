import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /examples (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|_next/|_static/|examples/|[\\w-]+\\.\\w+).*)',
  ],
};

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/; // Files

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Skip public files
  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  const hostname = req.headers.get('host');

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  let path = url.pathname;

  const currentHost = hostname?.split('.')[0];

  if (path.includes('_sites/')) {
    path = path.replace('_sites/', '');
  }

  // rewrite everything else to `/_sites/[site] dynamic route
  return NextResponse.rewrite(
    new URL(`/_sites/${currentHost}${path}`, req.url)
  );
}
