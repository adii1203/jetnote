"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { Loader } from "lucide-react";

const SignInButton = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div>
        <Button
          size={"sm"}
          variant={"outline"}
          className="font-snpro rounded-full w-10 h-10">
          <Loader size={14} className="animate-spin" />
        </Button>
      </div>
    );
  }
  return (
    <div>
      {isAuthenticated ? (
        <SignedIn>
          <UserButton showName />
        </SignedIn>
      ) : (
        <Button size={"sm"} variant={"outline"} className="font-snpro">
          <Link href={"/sign-up"}>Sign in</Link>
        </Button>
      )}
    </div>
  );
};

export default SignInButton;
