import { formatDate, isExpired } from "@/lib/dateUtils";
import Image from "next/image";

interface LabelProps {
  className?: string; // Allow additional styling overrides
  text: string;
}

export const Label1: React.FC<LabelProps> = ({ text, className = "" }) => {
  return (
    <p
      className={`font-inter text-[20px] font-semibold leading-[24.2px] text-left 
        } ${className}`}
    >
      {text}
    </p>
  );
};

export const Label2: React.FC<LabelProps> = ({ text, className = "" }) => {
  return (
    <p
      className={`font-inter text-[16px] font-normal leading-[19.36px] text-left ${className}`}
    >
      {text}
    </p>
  );
};

export const Label3: React.FC<LabelProps> = ({ text, className = "" }) => {
  return (
    <p
      className={`font-inter text-[13px] font-medium leading-[15.73px] text-left  ${className}`}
    >
      {text}
    </p>
  );
};

export const Label4: React.FC<LabelProps> = ({ text, className = "" }) => {
  return (
    <p
      className={`font-inter text-[16px] font-semibold leading-[19.36px] text-left  ${className}`}
    >
      {text}
    </p>
  );
};

export const DateLabel: React.FC<LabelProps> = ({ text, className = "" }) => {
  const flag = isExpired(text);
  if (!text) return;
  return (
    <div
      className={`${
        flag ? "bg-[#FCF4F4]" : "bg-[#F2F6FD]"
      } rounded ${className}`}
    >
      <p
        className={`${
          flag ? "text-[#CB2E27]" : "text-[#0359E0]"
        } py-1 px-2  font-inter text-[13px] font-medium leading-[15.73px] text-left  `}
      >
        {formatDate(text)}
      </p>
    </div>
  );
};

export const IconLabel: React.FC<{
  iconPath: string;
  text: string;
  className?: string;
}> = ({ text, className, iconPath }) => {
  return (
    <div
      className={`w-auto h-auto flex items-center text-[#727272] ${className}`}
    >
      <Image
        src={iconPath}
        alt={"status"}
        height={16}
        width={16}
        className="mr-2 "
      />
      <p
        className={`font-inter text-[16px] font-medium leading-[19.36px] text-left `}
      >
        {text}
      </p>
    </div>
  );
};
