import { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  color?: "black" | "orange" | "purple";
}

export default function Button({
  color = "black",
  children,
  ...props
}: ButtonProps) {
  return (
    <>
      <a
        className={`text-preset-7 group relative inline-block rounded-full ${
          color === "black"
            ? "bg-blue-900 transition-[background-color] duration-150 ease-out hover:bg-blue-600 focus:bg-blue-600"
            : color === "orange"
              ? "gradient-orange"
              : color === "purple"
                ? "gradient-purple"
                : ""
        } `}
        {...props}
      >
        {/* half-opaque background appears on hover/focus with transition for gradient buttons to emulate smooth color change*/}
        {(color === "orange" || color === "purple") && (
          <span className="absolute z-10 h-full w-full rounded-full bg-white opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-50 group-focus:opacity-50"></span>
        )}

        <span className="z-0 inline-block rounded-full px-300 py-150 text-white md:px-400 md:py-200">
          {children}
        </span>
      </a>
    </>
  );
}
