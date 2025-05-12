import Image from "next/image";
import Button from "./components/Button";
import ButtonLink from "./components/ButtonLink";
import Logo from "./components/Logo";
import Course from "./components/Course";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div className="mx-auto box-content flex max-w-[70rem] items-center justify-between px-200 py-250 md:px-550 md:py-300">
            <Logo />
            <Button href="#">Get Started</Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="gradient-white">
          <div className="mx-auto box-content grid max-w-[70rem] grid-cols-1 gap-x-300 gap-y-400 px-250 pt-800 pb-1000 md:grid-cols-2 md:px-550 md:pb-1800 xl:grid-cols-3">
            <div className="gradient-orange rounded-[1rem] p-400 md:px-400 md:pt-800 md:pb-500">
              <h2 className="text-preset-3 text-white">
                Check out our most popular courses!
              </h2>
            </div>

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
        </section>
      </main>

      <footer className="bg-blue-900">
        <nav>
          <div className="mx-auto box-content flex max-w-[70rem] items-center justify-between px-200 py-250 md:px-550 md:py-300">
            <Logo color="light" />
            <Button href="#" color="purple">
              Get Started
            </Button>
          </div>
        </nav>
      </footer>
    </>
  );
}
