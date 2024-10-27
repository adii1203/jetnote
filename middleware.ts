import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRouts = createRouteMatcher(["/v(.*)"]);
const isPublicRouts = createRouteMatcher(["/"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRouts(req)) {
    await auth.protect();
  }

  const { userId } = await auth();

  if (userId && isPublicRouts(req)) {
    // redirect to dashboard
    const { nextUrl } = req;
    return Response.redirect(new URL("/v/colloction", nextUrl));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
