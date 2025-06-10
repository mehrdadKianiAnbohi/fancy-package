import React from "react";
interface AriaModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    children: React.ReactNode;
}
export declare const Modal: React.FC<AriaModalProps>;
export {};
