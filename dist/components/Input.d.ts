import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}
export declare const Input: React.FC<InputProps>;
export {};
