import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;
  if (!token && req.nextUrl.pathname.startsWith("/approval")) {
    const res = NextResponse.rewrite(new URL("/", req.url));
    return res;
  }
};
export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico).*)"],
};
