import Image from "next/image";
import ButtonLink from "./ButtonLink";

interface CourseProps {
  icon: string;
  title: string;
  description: string;
  buttonLink: string | undefined;
}

export default function Course({
  icon,
  title = "Course Title",
  description = "Course description goes here...",
  buttonLink,
}: CourseProps) {
  return (
    <>
      <div className="relative flex flex-col items-start justify-between gap-300 rounded-[1rem] bg-white px-400 pt-800 pb-500 shadow-[0_1.6525rem_3.125rem_0_rgba(6,22,141,0.04)]">
        <Image
          src={icon}
          alt=""
          width={56}
          height={56}
          className="absolute top-[-1.75rem]"
        />

        <div className="flex flex-col gap-300">
          <h3 className="text-preset-4">{title}</h3>
          <p>{description}</p>
        </div>

        <ButtonLink href={buttonLink}>Get Started</ButtonLink>
      </div>
    </>
  );
}
