import { useClickOutside } from "@/hooks/useClickOutside";
import { StatusCode, TempTask, User } from "@/types";
import React, { useRef, useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTaskActions } from "@/store/selectors";
import { UserSelect } from "../form/input/UserSelect";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { DatePicker } from "../form/input/DatePicker";
import { PrioritySelect } from "../form/input/PrioritySelect";
import { X } from "lucide-react";

const TemporaryTaskCard = ({
  statusCode,
  hideCard,
}: {
  statusCode: StatusCode;
  hideCard: () => void;
}) => {
  const [tempTask, setTempTask] = useState<TempTask>({
    title: "",
    assignee: null,
    date: "",
    priority: null,
  });
  const ref = useRef<HTMLDivElement>(null);
  const { generateTaskCode, addTask } = useTaskActions();
  useClickOutside(ref, () => {
    const { title, assignee, date, priority } = tempTask;
    if (title && assignee && date && priority && statusCode) {
      const taskCode = generateTaskCode();
      addTask({
        code: taskCode,
        statusCode: statusCode,
        title: title,
        description: "",
        date: date,
        assignee: assignee,
        priority: priority,
      });
      // save card if all tempTask values are there
      // then hide the card
      hideCard();
    }
  });

  return (
    <div
      className="mt-3"
      ref={ref}
      onKeyDown={(e) => {
        if (e.key === "Escape") hideCard();
      }}
    >
      <Card>
        <CardHeader className="relative">
          <X className="h-4 w-4 absolute right-4 top-4" onClick={hideCard} />
          <CardTitle className="flex border-b pb-2">
            <Image
              src={`/images/tick-circle3.svg`}
              alt={"status"}
              height={24}
              width={24}
              priority
              className="mr-2"
            />
            <Input
              className="border-none shadow-none font-inter text-[20px] font-normal leading-[24.2px] text-left text-[#727272]"
              placeholder="Write a task name"
              value={tempTask.title}
              onChange={(e) =>
                setTempTask({ ...tempTask, title: e.target.value })
              }
            />
          </CardTitle>
        </CardHeader>

        <CardFooter className="flex justify-between ">
          <div className="flex">
            <UserSelect
              defaultValue={tempTask.assignee?.email ?? ""}
              onValueChange={(user) =>
                setTempTask({ ...tempTask, assignee: user })
              }
              isTempCard={true}
            />
            <DatePicker
              isTempCard={true}
              defaultValue={tempTask.date ?? ""}
              onValueChange={(date) => setTempTask({ ...tempTask, date: date })}
            />
          </div>
          <PrioritySelect
            isTempCard={true}
            defaultValue={tempTask.priority ?? ""}
            onValueChange={(priority) =>
              setTempTask({ ...tempTask, priority: priority as any })
            }
          />
        </CardFooter>
      </Card>
    </div>
  );
};

export default TemporaryTaskCard;
