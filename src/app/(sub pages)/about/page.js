"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import bg from "../../../../public/background/spellbook.jpeg";
import dynamic from "next/dynamic";
import RenderModel from "@/components/RenderModel";

const MagicalBond = dynamic(() => import("@/components/models/MagicalBond"), {
  ssr: false,
});

const AboutDetails = dynamic(() => import("../../../components/about"), {
  ssr: false,
});

export default function Home() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Image
        priority
        src={bg}
        sizes="100vw"
        alt="Gautam's Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-[100vw] h-[100vh] object-cover object-center opacity-60"
      />
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10"></div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[40%] sm:top-[40%] left-1/2 translate-x-[-50%] translate-y-[-20%]">
          <h1 className="font-bold text-5xl xs:text-5xl sm:text-6xl lg:text-7xl text-accent">
            Gautam
          </h1>
          <p className="font-light text-foreground text-lg">
            WELCOME to MY PORTFOLIO
          </p>
        </div>
      </div>
      <div className="fixed bottom-10 left-5 sm:bottom-13 sm:left-5 md:bottom-15 md:left-5 lg:bottom-20 lg:left-1/2 lg:-translate-x-1/2 xl:bottom-10 xl:left-1/2 xl:-translate-x-1/2 xs:bottom-12 xs:left-5">
        <div className="w-8 h-16 border-2 border-yellow-400 rounded-full relative">
          <div
            className={`w-2 h-2 bg-gray-400 rounded-full absolute left-1/2 transform -translate-x-1/2 ${
              isAtBottom ? "animate-scroll-reverse" : "animate-scroll"
            }`}
          ></div>
        </div>
      </div>
      <div className="flex items-center justify-center fixed top-16 lg:top-10 -translate-x-1/2 lg:translate-x-0 -z-50 left-[50%] lg:left-2 h-screen">
        <RenderModel>
          <MagicalBond />
        </RenderModel>
      </div>
      <div className="items-center justify-center fixed top-16 lg:top-10 -translate-x-1/2 lg:translate-x-0 -z-50 right-[50%] lg:right-2 h-screen hidden lg:block">
        <RenderModel>
          <MagicalBond />
        </RenderModel>
      </div>
      <AboutDetails />
    </>
  );
}
