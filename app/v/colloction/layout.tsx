import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <div className="sticky bg-background top-0 border w-full p-4">
            <SidebarTrigger />
          </div>
          <div className="w-full container mx-auto p-4">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default layout;
