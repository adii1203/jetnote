import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="grid place-content-center h-screen">
      <SignIn />
    </div>
  );
};

export default Page;
