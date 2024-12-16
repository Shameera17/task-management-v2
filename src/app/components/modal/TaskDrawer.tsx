"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { IconLabel, Label4 } from "../form/label";
import { ArrowRight, Trash } from "iconsax-react";
import { useTaskActions } from "@/store/selectors";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { RemoveTaskDialog } from "./RemoveTaskDialog";
import Image from "next/image";
import { StatusCode } from "@/types";
import { PrioritySelect } from "../form/input/PrioritySelect";
import { UserSelect } from "../form/input/UserSelect";
import { DatePicker } from "../form/input/DatePicker";

export function TaskDrawer({
  onOpen,
  open,
}: {
  onOpen: (flag: boolean) => void;
  open: boolean;
}) {
  const {
    taskDrawer: { record },
    updateTaskField,
    removeTask,
    manageDrawer,
    updateStatus,
  } = useTaskActions();
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Sheet onOpenChange={onOpen} open={open}>
      {/* top */}
      <SheetContent className="[&>button]:hidden ">
        <SheetHeader className="flex justify-between  w-full flex-row">
          {record?.statusCode !== StatusCode.COMPLETED && (
            <Button
              variant="outline"
              onClick={() => updateStatus(StatusCode.COMPLETED, record?.code!)}
            >
              <IconLabel
                iconPath="/images/tick-circle-2.svg"
                text="Mark Complete"
                className="text-[#1C1C1C] "
              />
            </Button>
          )}
          <div className="flex gap-3 ml-auto  self-center">
            <Trash
              onClick={() => setOpenDialog(true)}
              size={"20"}
              className="text-[#727272] cursor-pointer"
            />
            <ArrowRight
              onClick={() => onOpen(false)}
              size={"20"}
              className="text-[#727272] cursor-pointer"
            />
          </div>
        </SheetHeader>
        {/* title */}
        <div className="pt-10">
          <Input
            className="font-inter !text-[25px] font-semibold leading-[30.26px] text-left"
            placeholder="shadcn"
            defaultValue={record?.title}
            onChange={(e) => {
              updateTaskField(record?.code!, "title", e.target.value);
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-y-4 pt-10 pr-4">
          {/* status */}
          <IconLabel iconPath="/images/record.svg" text="Status" />
          <div>
            <div className="flex items-center">
              <Image
                src={`/images/${record?.statusCode.toLocaleLowerCase()}.svg`}
                alt={"status"}
                height={18}
                width={18}
              />
              <Label4
                text={
                  record?.statusCode! === StatusCode.IN_PROGRESS
                    ? "In Progress"
                    : record?.statusCode === StatusCode.TODO
                    ? "Todo"
                    : "Completed"
                }
                className="ml-2 mr-4"
              />
            </div>
          </div>
          {/* calendar */}
          <IconLabel iconPath="/images/calendar.svg" text="Due Date" />
          <DatePicker
            defaultValue={record?.date!}
            onValueChange={(date) => {
              updateTaskField(record?.code!, "date", date);
            }}
            onSelectRemove={() => {
              updateTaskField(record?.code!, "date", null);
            }}
          />
          {/* assignee */}
          <IconLabel iconPath="/images/user.svg" text="Assignee" />
          <UserSelect
            onValueChange={(user) => {
              updateTaskField(record?.code!, "assignee", user);
            }}
            defaultValue={
              record?.assignee && record?.assignee!.email
                ? record?.assignee!.email
                : ""
            }
            onSelectRemove={() => {
              updateTaskField(record?.code!, "assignee", null);
            }}
          />
          {/* priority */}
          <IconLabel iconPath="/images/flag.svg" text="Priority" />
          <PrioritySelect
            onValueChange={(priority) => {
              updateTaskField(record?.code!, "priority", priority);
            }}
            defaultValue={record?.priority!}
            onSelectRemove={() => {
              updateTaskField(record?.code!, "priority", null);
            }}
          />
        </div>
        {/* description */}
        <div className="pt-10 flex flex-col gap-4">
          <IconLabel iconPath="/images/document-text.svg" text="Description" />
          <Textarea
            className="font-inter !text-[16px] font-medium leading-[19.36px] text-[#474747] text-left"
            placeholder="shadcn"
            defaultValue={record?.description}
            onChange={(e) => {
              updateTaskField(record?.code!, "description", e.target.value);
            }}
          />
        </div>
      </SheetContent>
      {openDialog && (
        <RemoveTaskDialog
          onOpen={setOpenDialog}
          onRemoveClick={() => {
            removeTask(record?.code!);
            manageDrawer(false, undefined);
          }}
          open={openDialog}
        />
      )}
    </Sheet>
  );
}
