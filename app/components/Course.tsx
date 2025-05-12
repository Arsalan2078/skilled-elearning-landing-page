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
      <div className="relative mt-[1.75rem] flex flex-col items-start gap-300 rounded-[1rem] bg-white px-400 pt-800 pb-500 shadow-[0_1.6525rem_3.125rem_0_rgba(6,22,141,0.04)] justify-between">
        <Image
          src={icon}
          alt=""
          width={56}
          height={56}
          className="absolute top-[-1.75rem]"
        />

        <div className="flex flex-col gap-300">
          <h3 className="text-preset-4 text-blue-900">{title}</h3>
        <p className="text-grey">{description}</p>
        </div>
        

        <ButtonLink href={link}>Get Started</ButtonLink>
      </div>
    </>
  );
}
