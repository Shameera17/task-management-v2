import { Button } from "@/components/ui/button";
import { Add } from "iconsax-react";
import { Label4 } from "../label";

export const AddTaskButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className="h-12 mt-3 w-full flex justify-center text-[#727272] hover:text-[#727272]"
    >
      <Add style={{ width: "24px", height: "24px" }} />
      <Label4 text="Add task" />
    </Button>
  );
};
