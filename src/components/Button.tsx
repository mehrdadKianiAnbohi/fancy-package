import React, { useRef } from "react";
import { useButton } from "react-aria";
import clsx from "clsx";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type = "button",
  disabled = false,
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const { buttonProps } = useButton(
    {
      onPress: onClick,
      isDisabled: disabled,
      type,
    },
    ref
  );

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={clsx(
        "px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
};
