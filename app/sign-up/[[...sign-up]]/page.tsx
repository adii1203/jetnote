import { SignUp } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="grid place-content-center h-screen">
      <SignUp />
    </div>
  );
};

export default Page;
