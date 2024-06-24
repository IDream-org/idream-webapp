import {
  withMiddlewareAuthRequired,
  getSession,
} from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";

export default withMiddlewareAuthRequired(async function middleware(req) {
  const res = NextResponse.next();
  const user = await getSession(req, res);
  if (user) {
    res.cookies.set("idToken", user.idToken!);
  }
  return res;
});

export const config = {
  matcher: ["/dashboard", "/profile", "/collections/:slug*"],
};
