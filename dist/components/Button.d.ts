import React from "react";
export type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
};
export declare const Button: React.FC<ButtonProps>;
