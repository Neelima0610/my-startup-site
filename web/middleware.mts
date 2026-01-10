import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("🔥 MIDDLEWARE HIT:", request.nextUrl.pathname);

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/:path*"],
};
