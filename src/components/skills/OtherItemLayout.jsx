"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const OtherItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      whileHover={{
        scale: 1.02,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10
        }
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      }}
      viewport={{ once: true }}
      className={clsx(
        "group p-8 sm:p-10 rounded-2xl flex items-center justify-center",
        "bg-gradient-to-br from-purple-600/30 to-black/40 backdrop-blur-lg",
        "shadow-xl hover:shadow-2xl transition-all duration-500",
        "transform hover:translate-x-2",
        "border border-purple-500/20",
        "ring-1 ring-purple-500 hover:ring-purple-700",
        "relative overflow-hidden",
        className
      )}
    >
      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600/50 via-purple-500/50 to-purple-400/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/0 opacity-0 group-hover:opacity-20 transition-all duration-700 animate-glow" />
      
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-shine" />

      <div className="relative z-10 w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default OtherItemLayout;