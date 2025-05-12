import { ReactNode } from "react";

interface CoursesCTAProps {
  children: ReactNode;
}

export default function CoursesCTA({ children }: CoursesCTAProps) {
  return (
    <div className="gradient-orange rounded-[1rem] p-400 md:px-400 md:pt-800 md:pb-500">
      <h2 className="text-preset-3 text-white">{children}</h2>
    </div>
  );
}
