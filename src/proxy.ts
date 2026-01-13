import { NextResponse, NextRequest } from "next/server";

const PROTECTED_ROUTES = ["/messages", "/settings", "/profile"];
const AUTH_ROUTES = ["/login", "/signup"];

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const sessionToken = req.cookies.get("session_token")?.value;

  const isProtected = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  );
  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));

  if (isAuthRoute && sessionToken) {
    return NextResponse.redirect(new URL("/chats", req.url));
  }

  if (!isProtected) {
    return NextResponse.next();
  }

  if (!sessionToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const authCheck = await fetch(`${req.nextUrl.origin}/api/auth/session`, {
    headers: {
      cookie: `session_token=${sessionToken}`,
    },
  });

  if (!authCheck.ok) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/signup",
    "/messages",
    "/messages/:path*",
    "/settings/:path*",
    "/profile/:path*",
  ],
};
