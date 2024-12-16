import React from "react";
import ProfileHolder from "../navigation/ProfileHolder";
import { SidebarTrigger } from "@/components/ui/sidebar";

const DashboardLayout = ({
  children,
  navSearch,
}: {
  children: React.ReactNode;
  navSearch?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col h-full  ">
      {/* top nav */}
      <div className="flex items-center min-h-[72px] justify-between px-6 border-b border-[#EFEFEF] ">
        <div>
          <SidebarTrigger />
          {navSearch && navSearch}
        </div>
        <ProfileHolder />
      </div>
      {/* dashboard content */}
      <section className="h-full bg-[#F6F6F6] overflow-auto">
        {children}
      </section>
    </div>
  );
};

export default DashboardLayout;
