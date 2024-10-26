"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";

export function NavUser() {
  return (
    <SignedIn>
      <UserButton showName />
    </SignedIn>
  );
}
