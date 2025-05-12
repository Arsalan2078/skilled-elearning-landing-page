import Image from "next/image";
import ButtonLink from "./ButtonLink";
import { link } from "fs";

interface CourseProps {
  icon: string;
  title: string;
  description: string;
  link: string | undefined;
}

export default function Course({
  icon,
  title = "Course Title",
  description = "Course description goes here...",
  link,
}: CourseProps) {
  return (
    <>
      <div className="relative flex flex-col items-start gap-300 rounded-[1rem] bg-white px-400 pt-800 pb-500">
        <Image
          src={icon}
          alt=""
          width={56}
          height={56}
          className="absolute top-[-1.75rem]"
        />

        <h3 className="text-preset-4">{title}</h3>

        <p>{description}</p>

        <ButtonLink href={link}>Get Started</ButtonLink>
      </div>
    </>
  );
}
