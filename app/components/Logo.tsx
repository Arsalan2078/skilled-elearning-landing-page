import logoDark from "@/public/logo-dark.svg";
import logoLight from "@/public/logo-light.svg";
import Image from "next/image";

interface LogoProps {
  color?: "dark" | "light";
}

export default function Logo({ color = "dark" }: LogoProps) {
  return (
    <Image
      src={color === "dark" ? logoDark : color === "light" ? logoLight : ""}
      alt="logo"
    />
  );
}
