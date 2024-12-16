import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function RemoveTaskDialog({
  onOpen,
  open,
  onRemoveClick,
}: {
  onOpen: (flag: boolean) => void;
  open: boolean;
  onRemoveClick: () => void;
}) {
  return (
    <AlertDialog onOpenChange={onOpen} open>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete selected task?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the selected task. These items will no
            longer be accessible to you. This action is irreversible.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onRemoveClick}>
            Yes, delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
