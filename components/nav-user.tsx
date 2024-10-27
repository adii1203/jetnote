import { SignedIn, UserButton } from "@clerk/nextjs";

export function NavUser() {
  return (
    <div className="text-foreground">
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
