
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export const config = {
  matcher: '/:path*',
}

 
export function middleware(request: NextRequest) {
   // Extract country. Default to US if not found.
  
}

