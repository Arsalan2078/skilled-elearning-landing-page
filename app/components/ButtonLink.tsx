import { AnchorHTMLAttributes } from "react";

export default function ButtonLink({
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="text-preset-7 inline text-pink-600 transition-[color] duration-150 ease-out hover:text-pink-300 focus:text-pink-300"
      {...props}
    ></a>
  );
}
