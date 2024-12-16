import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "@/types";
import { getFirstLetters } from "@/lib/utils";
import { X } from "lucide-react";
import "./styles.css";

export function UserSelect({
  defaultValue,
  onValueChange,
  onSelectRemove,
  isTempCard,
}: {
  defaultValue: string;
  onValueChange: (user: User) => void;
  onSelectRemove?: () => void;
  isTempCard?: boolean;
}) {
  const [usersList, setUsersList] = React.useState<User[]>([]);

  React.useEffect(() => {
    const fetchUsersList = async () => {
      try {
        const response = await fetch("/data/users.json");
        if (!response.ok) {
          throw new Error("Failed to fetch statusList.");
        }
        const data = await response.json();
        setUsersList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsersList();
  }, []);

  return (
    <div
      className={`flex gap-2 items-center ${
        !isTempCard ? "w-[190px]" : "w-full"
      }`}
    >
      <Select
        value={defaultValue ?? ""}
        onValueChange={(value) => {
          const user = usersList.filter((user) => user.email === value)[0];
          onValueChange(user);
        }}
        defaultValue={defaultValue ?? undefined}
      >
        {isTempCard && (
          <SelectTrigger className="custom-select">
            <Avatar className="h-9 w-9">
              <AvatarImage
                src={
                  usersList.find((user) => user.email === defaultValue)
                    ?.avatarUrl ?? `/images/user-1.svg`
                }
                alt="@shadcn"
              />
              <AvatarFallback>
                {defaultValue
                  ? getFirstLetters(
                      usersList.find((user) => user.email === defaultValue)
                        ?.name ?? ""
                    )
                  : `/images/user-1.svg`}
              </AvatarFallback>
            </Avatar>
          </SelectTrigger>
        )}
        {!isTempCard && (
          <SelectTrigger className="w-[170px]">
            <SelectValue
              defaultValue={defaultValue ?? undefined}
              placeholder="Select a user"
            />
          </SelectTrigger>
        )}
        <SelectContent>
          <SelectGroup>
            <SelectLabel>User</SelectLabel>
            {Array.isArray(usersList) &&
              usersList.map((user) => (
                <SelectItem key={user.email} value={user.email}>
                  <span className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={user?.avatarUrl} alt="@shadcn" />
                      <AvatarFallback>
                        {user.name && getFirstLetters(user.name)}
                      </AvatarFallback>
                    </Avatar>
                    {user.name}
                  </span>
                </SelectItem>
              ))}
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
