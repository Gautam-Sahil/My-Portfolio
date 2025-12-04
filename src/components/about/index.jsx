import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-8 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="font-semibold text-xl md:text-2xl text-left w-full capitalize">
            A Glimpse Into My World
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            My journey through the world of web development is an ongoing quest
            where coding languages are the alchemical elements, and JavaScript
            is the Philosophers Stone that powers my creations. With frameworks
            like React.js and Next.js as my trusted tools, I shape dynamic
            portals (websites) that bridge the gap between users and a seamless
            digital experience. With a deep understanding of Linux, I am also
            passionate about optimizing and managing servers to ensure my
            websites are hosted efficiently and securely. As I continue my
            adventure, I remain dedicated to exploring new technologies and
            pushing the boundaries of what the web can offer. Join me as I craft
            the future of the digital universe, one spell at a time.
          </p>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="font-semibold text-xl md:text-2xl text-left w-full capitalize">
            About Me
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            MySelf Gautam Tiwari. I wield WordPress with Elementor, as well as
            other builders like Wix and Webflow, crafting intuitive websites
            that are easy to manage and scale. With mastery in HTML, CSS, and
            JavaScript, I combine these to create visually stunning, interactive
            sites that engage users from the first click. I also dive into 3D
            website design using Figma and Spline, bringing dynamic, immersive
            experiences to life.In my arsenal, I carry programming languages
            like C, C++, and Python, which I use for more complex logic and
            backend magic, ensuring my web creations are not only functional but
            intelligent. Tailwind CSS and Bootstrap are my tools for styling,
            adding sleek, responsive, and fast interfaces to each project.
          </p>
        </ItemLayout>

        <ItemLayout className="mt-6 col-span-full lg:col-span-8 row-span-2 flex-col hover:bg-black transition duration-300 ease-in-out">
          <p className="font-semibold w-full text-left text-xl sm:text-2xl text-accent">
            Education
          </p>

          <p className="text-md md:text-md text-left w-full">
            Fostering a deep understanding of computer science principles and
            web development practices.
          </p>

          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between border-t-2 border-blue-300 pt-4 lg:pt-0 ">
            <div className="w-full mt-7 lg:w-1/2 flex flex-col items-start space-y-2">
              <div className="w-full flex flex-col space-y-0">
                <h2 className="font-semibold text-2xl text-left m-0">
                  HSC (Science)
                </h2>
                <h3 className="font-semibold text-xl text-left m-0">
                  St. Xavier College Mumbai
                </h3>
                <h4 className="text-lg text-left m-0">July 2021 - March 2023</h4>
              </div>
            </div>

            <div className="w-full mt-7 lg:w-1/2 flex flex-col items-start space-y-2">
              <div className="w-full flex flex-col space-y-0">
                <h2 className="font-semibold text-2xl text-left m-0">
                  Bechelor Of Computer Application (BCA)
                </h2>
                <h3 className="font-semibold text-xl text-left m-0">
                  KKSU University
                </h3>
                <h4 className="text-lg text-left m-0">July 2023 - Present</h4>
              </div>
            </div>
          </div>
        </ItemLayout>

        <ItemLayout
          className={"col-span-4 xs:col-span-4 lg:col-span-4 text-yellow-200"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-4 xs:col-span-4 lg:col-span-4 text-yellow-200"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+ <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
    src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
    alt="CodeBucks"
    loading="lazy"
  />
</ItemLayout>

        <ItemLayout className="mt-10 col-span-full lg:col-span-full row-span-2 flex-col">
        <p className="font-semibold w-full text-left text-xl sm:text-2xl text-accent">
          Experience
        </p>

        <p className="text-md md:text-md text-left w-full">
          This section showcases my practical experience in the field of computer science and web development. Through internships and personal projects, I have honed my skills and gained valuable insights into the industry.
        </p>

        <div className="w-full flex flex-col space-y-8 border-t-2 border-blue-300 pt-5">
          <div className="group space-y-5">
            <ItemLayout className="w-full hover:bg-blue-500 transition duration-300 ease-in-out">
            <p className="font-semibold w-full text-left text-md sm:text-md">
  <span className="text-emerald-200 mr-2">Working on own Projects</span>
  <br />
  <strong>Self-Driven Developer</strong>
  <br /> | April 2025 – Present
  <br />
  • Transitioned to building full-stack applications with Next.js to deepen expertise in modern web development.
  <br />
  • Designed and developed complex personal projects focusing on scalable architecture and real-world problem-solving.
  <br />
  • Actively learning backend technologies, including Java and Python, to strengthen understanding of server-side development.
  <br />
  • Continuously improving skills in API design, database management, authentication, and deployment workflows.
</p>

            </ItemLayout>
            <div className="w-full h-px bg-blue-300 group-hover:bg-blue-500 transition duration-300 ease-in-out"></div>
          </div>

          <div className="group space-y-5">
            <ItemLayout className="w-full hover:bg-purple-600 transition duration-300 ease-in-out">
              <p className="font-semibold w-full text-left text-md sm:text-md">
                <span className="text-emerald-200 mr-2">InfinityX ltd</span>
                <br />
                <strong>Front-End Development Intern</strong> <br /> | January 2025 - March 2025
                <br />
                • Designed and implemented responsive and interactive user interfaces for a mobile application.
                <br />
                • Utilized React JavaScript Library to create dynamic and engaging user experiences.
                <br />
                • Gained valuable experience in working with a remote team and adhering to project deadlines.
              </p>
            </ItemLayout>
            <div className="w-full h-px bg-blue-300 group-hover:bg-purple-600 transition duration-300 ease-in-out"></div>
          </div>

          <div className="group space-y-5">
            <ItemLayout className="w-full hover:bg-emerald-700 transition duration-300 ease-in-out">
              <p className="font-semibold w-full text-left text-md sm:text-md">
                <span className="text-emerald-200 mr-2">Apoorva & Co</span>
                <br />
                <strong>Full-Stack Development Intern</strong> <br /> | August 2024 - October 2024
                <br />
                • Developed and deployed a full-stack web application using Node.js, Express.js, and React.js.
                <br />
                • Gained practical experience in database management, API integration, and cloud deployment.
                <br />
                • Worked on a real-world project, enhancing problem-solving and teamwork skills.
              </p>
            </ItemLayout>
            <div className="w-full h-px bg-blue-300 group-hover:bg-emerald-700 transition duration-300 ease-in-out"></div>
          </div>
        </div>
      </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
