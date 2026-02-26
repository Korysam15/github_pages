import { motion } from "framer-motion";
import { Cloud, Layout, Database, Terminal, Shield } from "lucide-react";
const skillCategories = [
  {
    title: "Frontend Ecosystem",
    icon: Layout,
    skills: [
      "ReactJS",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Svelte",
      "Swift",
      "Android",
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["Python", "Java", "PostgreSQL", "MongoDB", "C++", "C", "C#"],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Komodo", "N8N"],
  },
  {
    title: "Architecture",
    icon: Terminal,
    skills: ["Microservices", "Event-Driven", "REST API"],
  },
  {
    title: "Security & Testing",
    icon: Shield,
    skills: ["Jest", "Cypress", "OAuth 2.0", "Playwright", "Cypress"],
  },
  {
    title: "Geospatial Technologies",
    icon: Shield,
    skills: ["GeoServer", "NetCDF", "GRIB2", "GeoTIFF", "GDAL"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building robust, scalable digital
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="bg-card border border-border rounded-xl p-6 hover:border-indigo-500/50 transition-colors"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500 mr-3">
                  <category.icon size={20} />
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
