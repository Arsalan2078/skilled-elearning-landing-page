import Image from "next/image";
import Button from "./components/Button";
import ButtonLink from "./components/ButtonLink";
import Logo from "./components/Logo";
import Course from "./components/Course";
import CoursesCTA from "./components/CoursesCTA";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header>
        <nav>
          <div className="mx-auto box-content flex max-w-[70rem] items-center justify-between px-200 py-250 md:px-550 md:py-300">
            <Logo />
            <Button href="#">Get Started</Button>
          </div>
        </nav>

        <div className="relative mx-auto box-content flex max-w-[70rem] flex-col gap-600 px-250 py-800 md:flex-row md:items-center md:gap-300 md:px-550 xl:gap-400">
          <div className="flex flex-col items-start gap-500 md:flex-1">
            <div className="flex flex-col gap-300">
              <h1 className="text-preset-1">Maximize skill, minimize budget</h1>
              <p>
                Our modern courses across a range of in-demand skills will give
                you the knowledge you need to live the life you want.
              </p>
            </div>

            <Button href="#" color="orange">
              Get Started
            </Button>
          </div>

          <div className="-z-10 self-center md:h-[25rem] md:flex-1 xl:h-[35rem]">
            <picture className="md:absolute md:top-0 md:right-0 md:mt-[-11rem] md:mr-[-18.5rem] xl:mt-[-15.5rem] xl:mr-[-28rem]">
              <source
                srcSet="/image-hero-desktop.webp, /image-hero-desktop@2x.webp 2x"
                media="(min-width: 1280px)"
              />
              <source
                srcSet="/image-hero-tablet.webp, /image-hero-tablet@2x.webp 2x"
                media="(min-width: 768px)"
              />
              <source
                srcSet="/image-hero-mobile.webp, /image-hero-mobile@2x.webp 2x"
                media="(max-width: 767px)"
              />
              <img src="/image-hero-mobile.webp" alt="Hero Image" />
            </picture>
          </div>
        </div>
      </header>

      <main>
        <section className="gradient-white">
          <div className="mx-auto box-content grid max-w-[70rem] grid-cols-1 gap-x-300 gap-y-[3.25rem] px-250 pt-800 pb-1000 md:grid-cols-2 md:px-550 md:pb-1800 xl:grid-cols-3">
            <CoursesCTA>Check out our most popular courses!</CoursesCTA>

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
    </div>
  );
}
