"use client";
import React from "react";
import { FileCode, Database, Terminal, Layers, Edit, Users, Wrench, Code } from "lucide-react";
import SkillsItemLayout from "./SkillsItemLayout";
import "./index.css";

const MySkillsSection = () => {
  return (
    <SkillsItemLayout className="col-span-full lg:col-span-8 flex-col mt-12">
      <h1 className="font-bold text-3xl sm:text-4xl text-left w-full mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 text-transparent bg-clip-text">
        My Skills and Capabilities
      </h1>
      <p className="text-xl sm:text-2xl font-semibold text-left w-full mb-8 text-gray-300">
        A DEDICATED DEVELOPER WITH A DIVERSE RANGE OF SKILLS
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
    
        {[
          {
            icon: <FileCode className="w-6 h-6 text-purple-400" />,
            title: "Frontend Development",
            skills: ["HTML, CSS, Tailwind CSS", "JavaScript, React, Next.js", "Responsive Design & Cross-Browser Compatibility"],
          },
          {
            icon: <Database className="w-6 h-6 text-pink-400" />,
            title: "Backend Development",
            skills: ["Node.js, Next.js, Express.js", "RESTful APIs", "Basic familiarity with databases (SQL, MongoDB)"],
          },
          {
            icon: <Code className="w-6 h-6 text-indigo-400" />,
            title: "Coding and Site Building",
            description: "Core development languages and platforms used for building software and websites.",
            skills: ["C Programming, C++, Python", "WordPress, Webflow", "Linux Operating System"],
          },
          {
            icon: <Edit className="w-6 h-6 text-purple-400" />,
            title: "UI/UX Design",
            skills: ["Figma, Spline, Canva", " Adobe Creative Suite (XD, Photoshop)", "Wireframing and Prototyping"],
          },
          {
            icon: <Users className="w-6 h-6 text-pink-400" />,
            title: "Tools & Workflow",
            skills: ["Git, GitHub, Version Control", "Agile Development, SCRUM", "Visual Studio Code, Webpack"],
          },
          {
            icon: <Wrench className="w-6 h-6 text-indigo-400" />,
            title: "Other Relevant Skills",
            skills: ["Debugging & Problem-Solving", "Performance Optimization", "Collaborative Teamwork"],
          },
        ].map((category, index) => (
          <div
            key={index}
            className="skills-glow group"
          >
            <div className="skills-card-content skills-hover-effect">
              <div className="flex items-center space-x-3 mb-3">
                {category.icon}
                <h3 className="font-bold text-lg group-hover:text-purple-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <ul className="text-md space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SkillsItemLayout>
  );
};

export default MySkillsSection;