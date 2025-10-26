import Image from "next/image";
import bg from "../../../../public/background/contact-bg.jpg";
import Form from "@/components/contact/Form";
import dynamic from "next/dynamic";
import RenderModel from "@/components/RenderModel";
const MagicBall = dynamic(() => import("@/components/models/MagicBall"), {
  ssr: false,
});

export const metadata = {
  title: "Gautam's Portfolio | Contact |",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-[100vw]  h-[100vh] object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 pb-0 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-yellow-200 font-semibold text-center text-4xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Whether you are interested in collaborating on a project, have a
            question, or simply want to share your thoughts, Im here to listen.
            Your message is important, and I value every opportunity to engage
            with you. Please feel free to use the form below to reach out, and
            Ill make sure to respond as soon as possible. I look forward to
            hearing from you and exploring new possibilities together!
          </p>
        </div>
        <Form />

        <div style={{ marginTop: "5px" }} className="-z-50">
          <RenderModel environment="dawn">
            <MagicBall scale={1.1} />
          </RenderModel>
        </div>
      </article>
    </>
  );
}
