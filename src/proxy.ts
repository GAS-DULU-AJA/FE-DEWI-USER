import { NextRequest, NextResponse } from "next/server";

// Routes that require authentication
const PROTECTED_ROUTES = ["/profile", "/bookings", "/itinerary"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (!isProtected) return NextResponse.next();

  const token = request.cookies.get("auth-token")?.value;

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/bookings/:path*", "/itinerary/:path*"],
};
