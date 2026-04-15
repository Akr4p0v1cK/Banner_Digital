"use client";

import { motion } from "framer-motion";
import { 
  SiNextdotjs, SiReact, SiFigma, SiTailwindcss, SiTypescript, 
  SiVercel, SiNodedotjs, SiPostgresql 
} from "react-icons/si";

const logos = [
  { Icon: SiReact, name: "React" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiFigma, name: "Figma" },
  { Icon: SiVercel, name: "Vercel" },
];

export default function TechLogos() {
  return (
    <section className="w-full py-20 lg:py-28 bg-transparent border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-zinc-600 text-sm font-semibold uppercase tracking-[0.3em] mb-14"
        >
          Tecnologias que domino
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map(({ Icon, name }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex flex-col items-center gap-3"
              data-cursor-hover="true"
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-zinc-700 group-hover:text-brand transition-colors duration-500 cursor-none" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-700 group-hover:text-zinc-400 transition-colors duration-500">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
