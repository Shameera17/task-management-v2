import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HambergerMenu } from "iconsax-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const ProfileHolder = () => {
  return (
    <Popover>
      <PopoverTrigger className="flex py-1 px-2 items-center rounded-full border-2 border-[#EFEFEF] gap-1">
        <HambergerMenu size="20" />
        <Avatar className="border-2 border-[#EFEFEF] p-1">
          <AvatarImage src="/images/logo1.svg" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
};

export default ProfileHolder;
