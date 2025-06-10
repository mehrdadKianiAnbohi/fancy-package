import {
  Dialog,
  Heading,
  Modal as ReactAriaModal,
} from "react-aria-components";
import React from "react";
import { Button } from "./Button";

interface AriaModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<AriaModalProps> = ({
  isOpen,
  onOpenChange,
  title,
  children,
}) => {
  return (
    <ReactAriaModal isOpen={isOpen} onOpenChange={onOpenChange}>
      <Dialog className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          {title && (
            <Heading slot="title" className="text-lg font-medium">
              {title}
            </Heading>
          )}
          <Button
            className="text-gray-500 hover:text-black"
            onClick={() => onOpenChange(false)}
          >
            x
          </Button>
        </div>
        <div>{children}</div>
      </Dialog>
    </ReactAriaModal>
  );
};
