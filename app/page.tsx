import Image from "next/image";
import Button from "./components/Button";
import ButtonLink from "./components/ButtonLink";
import Logo from "./components/Logo";
import Course from "./components/Course";

export default function Home() {
  return (
    <div className="bg-linear-to-b from-white to-[#F0F1FF]">
      <Course
        icon="./icon-animation.svg"
        title="Animation"
        description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
        link="#"
      />
      <Course
        icon="./icon-design.svg"
        title="Design"
        description="Create beautiful, usable interfaces to help shape the future of how the web looks."
        link="#"
      />
      <Course
        icon="./icon-photography.svg"
        title="Photography"
        description="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
        link="#"
      />
      <Course
        icon="./icon-crypto.svg"
        title="Crypto"
        description="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
        link="#"
      />
      <Course
        icon="./icon-business.svg"
        title="Business"
        description="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
        link="#"
      />
    </div>
  );
}
