import Image from "next/image";
import Button from "./components/Button";
import ButtonLink from "./components/ButtonLink";

export default function Home() {
  return (
    <div>
      <Button href="#" color="black">
        Get Started
      </Button>

      <Button href="#" color="orange">
        Get Started
      </Button>

      <Button href="#" color="purple">
        Get Started
      </Button>

      <ButtonLink href="#">Get Started</ButtonLink>
    </div>
  );
}
