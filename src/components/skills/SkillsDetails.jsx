import React from "react";
import {
  Code2,
  Rocket,
  Wrench,
  Database,
  Cloud,
  Lock,
} from "lucide-react";
import "./index.css";
import ItemLayout from "./ItemsLayouts";
import MySkillsSection from "./MySkillsSection";
import AchievementsSection from "./AchievementsSection";

const SkillsDetails = () => {
  return (
    <section className="py-18 w-full">
      <div className="grid grid-cols-8 gap-4 xs:gap-6 md:gap-8 w-full">

        <ItemLayout className="col-span-full lg:col-span-8 flex-col">
          <h1 className="font-bold text-3xl sm:text-4xl text-left w-full mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
            What I Do
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-left w-full mb-8 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 text-transparent bg-clip-text">
            CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </p>

          {/* Key Points */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCards.map((skill, index) => (
              <div
                key={index}
                className="skill-card flex flex-col items-start space-y-2 group"
              >
                <div className="flex items-center space-x-2">
                  <skill.icon className="w-6 h-6 text-cyan-400 group-hover:text-teal-400 transition-colors duration-300" />
                  <h3 className="font-bold text-lg group-hover:text-cyan-300 transition-colors duration-300">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-md text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </ItemLayout>

        {/* My Skills Section */}
        <MySkillsSection />

        {/* Achievements Section */}
        <AchievementsSection />
      </div>
    </section>
  );
};

const skillCards = [
  {
    icon: Code2,
    title: "Open Source",
    description: "Active open-source contributor, collaborating with developers worldwide"
  },
  {
    icon: Rocket,
    title: "Interactive UI",
    description: "Develop highly interactive Front end / User Interfaces for web and mobile applications"
  },
  {
    icon: Wrench,
    title: "Problem Solving",
    description: "Create utility tools to solve real-world problems and make daily life easier"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Design and implement scalable backend systems and RESTful APIs"
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Deploy and manage applications using modern cloud platforms"
  },
  {
    icon: Lock,
    title: "Security",
    description: "Implement secure authentication and data protection measures"
  }
];

export default SkillsDetails;