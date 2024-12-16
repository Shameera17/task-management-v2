import Link from "next/link";
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

interface SideMenuItemProps {
  url: string;
  title: string;
  Icon: React.ElementType;
}

export const SideMenuItem: React.FC<SideMenuItemProps> = ({
  url,
  title,
  Icon,
}) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link
          href={url}
          className={`flex items-center gap-2 py-5 px-3 rounded transition-all duration-200 ease-linear font-semibold text-base ${
            isActive
              ? "bg-[#0359E0] text-white hover:!bg-[#0249C4] hover:!text-white"
              : "bg-[#F6F6F6] text-gray-700 hover:text-gray-800 hover:bg-gray-200"
          }`}
        >
          <Icon className="h-6 w-6" />
          <span>{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
