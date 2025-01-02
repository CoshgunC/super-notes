import { twMerge } from "tailwind-merge";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          "rounded-lg outline-none bg-transparent p-4 placeholder:text-gray-700 text-gray-800 placeholder:dark:text-gray-400 dark:text-gray-200",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
