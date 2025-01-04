import Image from "next/image";
import bg from "../../../../public/background/skills-bg.jpg";
import dynamic from "next/dynamic";
import RenderModel from "@/components/RenderModel";
import SkillsDetails from "@/components/skills/SkillsDetails";

const Robot = dynamic(() => import("@/components/models/Robot"), {
  ssr: false,
});

export const metadata = {
  title: " Gautam's Portfolio | skills |",
};

export default function Home() {
  return (
    <>
      <Image
        priority
        src={bg}
        alt="Skills background image"
        className="-z-50 fixed top-0 left-0 w-[100vw]  h-[100vh] object-cover object-center opacity-45"
        sizes="100vw"
      />

      <div className="flex fixed top-2 lg:top-6 left-1/2 transform -translate-x-[50%] lg:-translate-x-[50%] -translate-y-[32%] h-screen w-[100%] -z-50">
        <RenderModel>
          <Robot position={[0, -1.5, 0]} /> 
        </RenderModel>
      </div>

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10"></div>

<div className="relative w-full h-screen flex flex-col items-center justify-center">
  <div className="absolute flex flex-col items-center text-center top-[43%] left-1/2 translate-y-[-40%] -translate-x-1/2">
    <h1 className="font-extrabold text-4xl xs:text-4xl sm:text-5xl lg:text-5xl md:text-5xl bg-clip-text text-transparent  bg-gradient-to-r from-yellow-400 to-lime-400 hover:bg-clip-padding">
      {"<"}Hello!{">"}
    </h1>
    <p className="font-light text-foreground text-md xs:text-md sm:text-lg">Here I have described My some Skills & Achievements</p>
  </div>

  <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 h-16">
    <div className="arrow border-[#ebff04] border-r-2 border-b-2 w-6 h-6 absolute top-0 left-1/2 transform -translate-x-1/2 rotate-45 animate-arrow1"></div>
    <div className="arrow border-[#ebff04] border-r-2 border-b-2 w-6 h-6 absolute top-0 left-1/2 transform -translate-x-1/2 rotate-45 animate-arrow2"></div>
    <div className="arrow border-[#ebff04] border-r-2 border-b-2 w-6 h-6 absolute top-0 left-1/2 transform -translate-x-1/2 rotate-45"></div>
  </div>
</div>
      <SkillsDetails/>
    </>
  );
}
