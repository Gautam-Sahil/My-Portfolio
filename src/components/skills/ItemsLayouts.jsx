"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 50 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      }}
      whileHover={{
        scale: 1.02,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      }}
      viewport={{ once: true }}
      className={clsx(
        "group relative p-10 sm:p-12 rounded-3xl flex items-center justify-center space-y-8",
        "bg-gradient-to-br from-cyan-900/30 to-slate-900/40",
        "backdrop-blur-md text-white",
        "shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500",
        "overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-r from-cyan-500/50 via-teal-500/50 to-emerald-500/50 opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

      <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-xl" />

      <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl group-hover:translate-x-10 group-hover:translate-y-10 transition-transform duration-700" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl group-hover:-translate-x-10 group-hover:-translate-y-10 transition-transform duration-700" />

      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out" />
      
      <div className="relative z-10 w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default ItemLayout;