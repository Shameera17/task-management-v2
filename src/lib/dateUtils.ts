export const getCompletionText = (dueDate: string): string => {
  if (!dueDate) return "No due date given";
  const today = new Date();
  const due = new Date(dueDate);

  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);

  const differenceInMs = due.getTime() - today.getTime();
  const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24)); // Convert ms to days

  if (differenceInDays > 1) {
    return `Should complete within ${differenceInDays} days`;
  } else if (differenceInDays === 1) {
    return `Should complete within today`;
  } else if (differenceInDays === 0) {
    return `Should complete within today`;
  } else if (differenceInDays === -1) {
    return `Should’ve completed yesterday`;
  } else {
    return `Should’ve completed ${Math.abs(differenceInDays)} days ago`;
  }
};

export const isExpired = (dueDate: string): boolean => {
  const today = new Date();
  const due = new Date(dueDate);

  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);

  const differenceInMs = due.getTime() - today.getTime();
  const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24)); // Convert ms to days

  if (differenceInDays >= 1) return false;
  else return true;
};

export const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  const due = new Date(date);
  return new Intl.DateTimeFormat("en-US", options).format(due);
};
