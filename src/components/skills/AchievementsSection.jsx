"use client";
import React from "react";
import { Trophy, Star, Award, Medal } from "lucide-react";
import OtherItemLayout from "./OtherItemLayout";
import "./index.css";

const AchievementsSection = () => {
  return (
    <OtherItemLayout className="col-span-full lg:col-span-8 flex-col mt-12">
      <h1 className="font-bold text-3xl sm:text-4xl text-left w-full mb-4 text-accent">
        Selected Achievements
      </h1>
      <p className="text-xl sm:text-2xl font-semibold text-left w-full mb-8 bg-gradient-to-r from-purple-300 to-pink-500 text-transparent bg-clip-text">
        MILESTONES THAT MARK MY JOURNEY IN WEB Development
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: Trophy,
            title: "Hackathon - Runner-Up ",
            description: "Developed a functional blogging platform in under 6 hours, earning high praise for clean code and innovative features."
          },
          {
            icon: Star,
            title: "CodeBuck - Runner-Up",
            description: "designed and developed a visually appealing and fast-loading portfolio website in under 24 hours."
          },
          {
            icon: Award,
            title: "6-Hour Coding Challenge",
            description: "Won a 6-hour coding competition by building a fully responsive food ordering website using Next.js and Tailwind CSS."
          },
          {
            icon: Medal,
            title: "Best UI/UX Design ",
            description: "Recognized for creating an seamless user experience fintech app, developed using Figma and implemented with Tailwind CSS."
          }
        ].map((achievement, index) => (
          <div key={index} className="achievement-card group">
            <div className="achievement-orb" />
            {React.createElement(achievement.icon, { className: "achievement-icon" })}

            <h3 className="achievement-title text-xl font-bold mb-2">
              {achievement.title}
            </h3>
            <p className="achievement-description text-gray-400">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </OtherItemLayout>
  );
};

export default AchievementsSection;