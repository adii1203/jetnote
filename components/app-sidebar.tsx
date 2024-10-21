"use client";

import * as React from "react";

import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Calendar from "./calendar";
import { ThemeToggle } from "./themeToggle";

// This is sample data.
const data = {
  user: {
    name: "adii",
    email: "aditya32ft@gmail.com",
    avatar: "https://avatars.githubusercontent.com/u/114096753?v=4",
  },
  // calendars: [
  //   {
  //     name: "My Calendars",
  //     items: ["Personal", "Work", "Family"],
  //   },
  //   {
  //     name: "Favorites",
  //     items: ["Holidays", "Birthdays"],
  //   },
  //   {
  //     name: "Other",
  //     items: ["Travel", "Reminders", "Deadlines"],
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="">
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent className="mt-2">
        <Calendar />
        <SidebarSeparator className="mx-0" />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <ThemeToggle />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
