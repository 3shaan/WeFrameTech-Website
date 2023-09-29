import clsx from "clsx";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  secondary?: boolean;
  danger?: boolean;
  disable?: boolean;
  fullWidth?: boolean;
  primary ?: boolean;
  isOutline ?:boolean
};

export default function Button({ children, danger, disable,secondary, fullWidth, primary, isOutline}: ButtonProps) {
  return (
    <button
    className={clsx(
        `
          flex
          justify-center
          rounded-md
          px-3
          py-2
          text-sm
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-1
          gap-3 items-center
          `,
        disable && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-gray-900" : "text-white",
        danger &&
          "bg-danger focus:bg-danger focus-visible:outline-danger",
        primary && 'bg-[#0d0e7f]',
        isOutline && "outline-danger ring-2 ring-danger hover:bg-danger transition duration-150"
      )}
    >
      {children}
    </button>
  );
}
