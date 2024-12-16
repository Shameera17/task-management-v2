"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import {
  Diagram,
  Home2,
  LampCharge,
  NotificationBing,
  Setting2,
  TaskSquare,
} from "iconsax-react";
import Image from "next/image";
import { SideMenuItem } from "./SideMenuItem";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home2,
  },
  {
    title: "Tasks",
    url: "/tasks",
    icon: TaskSquare,
  },
  {
    title: "Report",
    url: "/report",
    icon: Diagram,
  },
  {
    title: "Insights",
    url: "/insigts",
    icon: LampCharge,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: NotificationBing,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Setting2,
  },
];

export function AppSideBar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-white ">
        <SidebarGroup className="flex flex-col gap-12 p-0 ">
          {/* Logo */}
          <SidebarGroupContent>
            <div className="relative w-full min-h-[72px] border-b border-[#EFEFEF]">
              <Image
                src="/images/logo.svg"
                alt="Full width example"
                fill
                className="object-cover" // Makes the image responsive
                priority // Preloads the image [ added cos it was detected as the Largest Contentful Paint (LCP) element]
              />
            </div>
          </SidebarGroupContent>
          {/* Menu items */}
          <SidebarGroupContent className=" px-6 ">
            <SidebarMenu className="flex flex-col gap-4">
              {items.map((item) => (
                <SideMenuItem
                  key={item.title}
                  url={item.url}
                  title={item.title}
                  Icon={item.icon}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
