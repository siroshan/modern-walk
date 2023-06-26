import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  const hostname = req.headers.get('host');

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = url.pathname;

  const currentHost = hostname?.split('.')[0];

  // rewrite everything else to `/_sites/[site] dynamic route
  return NextResponse.rewrite(
    new URL(`/_sites/${currentHost}${path}`, req.url)
  );
}
