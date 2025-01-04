"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const SkillsItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 1,
      }}
      whileHover={{
        scale: 1.02,
        
        transition: {
          type: "spring",
          
          damping: 10,
        },
      }}
      viewport={{ once: true }}
      className={clsx(
        "p-10 sm:p-12 rounded-3xl flex items-center justify-center",
        "bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20",
        "backdrop-blur-md text-white relative overflow-hidden",
        "shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(120,0,255,0.2)]",
        "border border-white/10 hover:border-purple-500/30",
        "transition-all duration-700 ease-out",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-pink-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      <div className="absolute -inset-px bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default SkillsItemLayout;