import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getCompletionText } from "@/lib/dateUtils";
import { useTaskStore } from "@/store/taskStore";
import { StatusCode, Task } from "@/types";
import { useDraggable } from "@dnd-kit/core";
import React from "react";
import { DateLabel, Label1, Label2, Label3 } from "../form/label";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getFirstLetters } from "@/lib/utils";

const TaskCard = ({ task }: { task: Task }) => {
  const manageDrawer = useTaskStore((state) => state.manageDrawer);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.code,
  });
  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;
  return (
    <Card
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      onClickCapture={() => manageDrawer(true, task)}
      style={style}
    >
      <CardHeader className="flex flex-row border-b">
        <Image
          src={`/images/tick-circle${
            task.statusCode === StatusCode.COMPLETED ? "-1" : "-2"
          }.svg`}
          alt={"status"}
          height={16}
          width={16}
          priority
          className="mr-2"
        />
        <Label1 className="!mt-0" text={task.title} />
      </CardHeader>
      <CardContent className="p-4">
        <Label2 text={task.description ?? ""} className="text-[#474747]" />
        <div className="flex justify-between mt-2">
          <div className="flex gap-4 items-center">
            <Avatar>
              {task.assignee?.avatarUrl && (
                <>
                  <AvatarImage src={task.assignee?.avatarUrl} alt="@shadcn" />
                  <AvatarFallback>
                    {task.assignee?.name &&
                      getFirstLetters(task.assignee?.name!)}
                  </AvatarFallback>
                </>
              )}
              {!task.assignee?.avatarUrl && (
                <AvatarImage src={`/images/user-1.svg`} alt="@shadcn" />
              )}
            </Avatar>
            {task.date && <DateLabel className="h-6" text={task.date} />}
            {!task.date && (
              <Avatar>
                <AvatarImage src={`/images/date.svg`} alt="@shadcn" />
              </Avatar>
            )}
          </div>
          <img src={`/images/State${task.priority}.svg`} alt="" />
        </div>
      </CardContent>
      {task.statusCode !== StatusCode.COMPLETED && (
        <CardFooter>
          <Image
            src={`/images/clock.svg`}
            alt={"status"}
            height={16}
            width={16}
            className="mr-2"
          />
          <Label3
            text={getCompletionText(task.date)}
            className="text-[#474747]"
          />
        </CardFooter>
      )}
    </Card>
  );
};

export default TaskCard;
