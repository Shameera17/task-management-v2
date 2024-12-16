import { StatusCode } from "@/types";
import { Add } from "iconsax-react";
import Image from "next/image";
import React, { useMemo } from "react";
import { Label1 } from "../form/label";

interface TitleCardProps {
  statusCode: StatusCode;
  title: string;
  count: number;
  addTask: () => void;
  className?: string;
}
const TitleCard: React.FC<TitleCardProps> = ({
  statusCode,
  title,
  count,
  addTask,
  className,
}) => {
  return (
    <div
      className={`w-full h-[56px] p-4 bg-[#FFFFFF]  rounded-[8px] flex justify-between  ${className}`}
    >
      <div className="flex items-center">
        <Image
          src={`/images/${statusCode.toLocaleLowerCase()}.svg`}
          alt={"status"}
          height={24}
          width={24}
        />
        <Label1 text={title} className="ml-2 mr-4" />
        <span className="w-6 h-6 rounded-full bg-[#F2F6FD] text-[#0359E0] flex items-center justify-center text-center ">
          {count}
        </span>
      </div>
      <Add className="cursor-pointer" onClick={addTask} />
    </div>
  );
};

export default TitleCard;
