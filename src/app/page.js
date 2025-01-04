'use client'
import Image from "next/image";
import bg from "../../public/background/home-bg.jpg";
import RenderModel from "../components/RenderModel";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Wizard"), { ssr: false });
const Navigation = dynamic(() => import("@/components/navigation"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-[100vw] h-[100vh] object-cover object-center opacity-45"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel environment="dawn">
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
