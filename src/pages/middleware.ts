// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  if (req.cookies.has("oatmealRaisin")) {
    const oatmealRaisinValue = req.cookies.get("oatmealRaisin");

    console.log("oatmealRaisinValue", oatmealRaisinValue);

    const res = NextResponse.next();
    res.cookies.set("oatmealRaisin", "12");
  }
  return NextResponse.redirect(new URL("/login", req.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/((?!login).*)",
};
