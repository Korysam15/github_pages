import { motion } from "framer-motion";
import { ThreeBackground } from "./ThreeBackground";
import { ArrowRight, ChevronDown } from "lucide-react";
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <ThreeBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-500 text-sm font-medium mb-6 border border-indigo-500/20">
              Available for Senior Full Stack Roles
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight"
          >
            Engineering Leadership & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              System Architecture
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Building scalable, high-performance applications with a focus on
            developer experience and business impact. Specializing in full-stack
            development across all stages of the product lifecycle with an
            emphasis on AI and automation.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#experience"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full hover:bg-foreground/90 transition-all duration-200 shadow-lg shadow-indigo-500/20"
            >
              View Experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-background border border-border rounded-full hover:bg-muted transition-all duration-200"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
