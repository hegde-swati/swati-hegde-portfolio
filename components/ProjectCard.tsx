"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  index: number;
};

export default function ProjectCard({ title, description, stack, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
    >
      <h3 className="text-xl font-semibold text-violet-300">{title}</h3>
      <p className="mt-3 text-slate-300">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span key={item} className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-200">
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
