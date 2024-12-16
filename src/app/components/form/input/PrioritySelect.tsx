import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import "./styles.css";

export function PrioritySelect({
  defaultValue,
  onValueChange,
  onSelectRemove,
  isTempCard,
}: {
  defaultValue: string;
  onValueChange: (priority: string) => void;
  onSelectRemove?: () => void;
  isTempCard?: boolean;
}) {
  return (
    <div className="flex gap-3 items-center">
      <Select
        value={defaultValue ?? ""}
        onValueChange={(value) => onValueChange(value)}
        defaultValue={defaultValue ?? ""}
      >
        {!isTempCard && (
          <SelectTrigger className="flex w-[180px]">
            <SelectValue
              defaultValue={defaultValue ?? ""}
              placeholder="Set priority"
              className="text-gray-400"
            />
          </SelectTrigger>
        )}
        {isTempCard && (
          <>
            <SelectTrigger className="flex w-[180px] custom-select-priority text-[#727272] ">
              {!defaultValue && (
                <SelectValue
                  defaultValue={defaultValue ?? ""}
                  placeholder="Set priority"
                  className="text-gray-400 border-dashed "
                />
              )}
              {defaultValue && (
                <img src={`/images/State${defaultValue}.svg`} alt="" />
              )}
            </SelectTrigger>
          </>
        )}
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Priority</SelectLabel>
            <SelectItem value="Low">Low</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="High">High</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {defaultValue && onSelectRemove && (
        <span className="w-5 h-5">
          <X className="h-full cursor-pointer" onClick={onSelectRemove} />
        </span>
      )}
    </div>
  );
}
