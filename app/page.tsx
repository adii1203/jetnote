import { Button } from "@/components/ui/button";
import DotPattern from "@/components/landing/DotPattern";
import BlurFade from "@/components/magicui/blur-fade";
import { Cards } from "@/components/landing/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full font-snpro min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ filter: "blur(5px)" }}></div>
      <DotPattern className="z-0" />
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between rounded-xl p-4 sm:p-8 relative z-10">
        <div className="w-full flex flex-col items-center lg:w-1/2 lg:mb-0">
          <BlurFade delay={0.15}>
            <h1 className="text-black font-snpro text-5xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Your tasks, simplified
            </h1>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="text-black text-lg sm:text-xl opacity-60 font-normal mb-8 max-w-[564px]">
              Create, manage and conqure your tasks and notes with ease.
            </p>
          </BlurFade>

          <BlurFade delay={0.25}>
            <div className="flex flex-wrap gap-3 mb-12">
              {/* <Button className="w-[183px] h-[59px] text-base font-bold bg-black rounded-xl flex items-center justify-center">
                Get Started
              </Button> */}
              <Link
                href={"/sign-in"}
                className={buttonVariants({
                  size: "lg",
                  className:
                    "w-[183px] h-[59px] text-lg font-bold bg-black rounded-xl flex items-center justify-center",
                })}>
                Sign in
              </Link>
              <Button
                variant="outline"
                className="w-[183px] h-[59px] text-base font-bold rounded-xl flex items-center justify-center border-black border-2 border-opacity-10 hover:bg-white">
                Explore
              </Button>
            </div>
          </BlurFade>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <Cards />
        </div>
      </div>
    </div>
  );
}
