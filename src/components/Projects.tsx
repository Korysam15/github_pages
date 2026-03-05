import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
const projects = [
  {
    id: 0,
    title: "N8N Template that integrates with Mealie",
    description:
      "This n8n template demonstrates how to automatically generate a full week of dinner meal plans in your self hosted Mealie instance and create a corresponding shopping list based on those planned meals.",
    tags: ["JSON", "n8n"],
    stats: {
      stars: 0,
      forks: 0,
      lang: "JSON",
    },
    links: {
      demo: "https://n8n.io/workflows/13815-generate-weekly-dinner-meal-plans-and-shopping-lists-using-mealie/",
    },
  },
  {
    id: 1,
    title: "Affirmations Scriptable Widget",
    description:
      "A JavaScript-based widget for the Scriptable app that fetches daily affirmations from affirmations.dev and displays them directly on your iOS or macOS home screen.",
    tags: ["JavaScript", "Scriptable"],
    stats: {
      stars: 0,
      forks: 0,
      lang: "JavaScript",
    },
    links: {
      github: "https://github.com/Korysam15/affirmations-scriptable-widget",
    },
  },
  {
    id: 2,
    title: "Bamboo Scriptable Widget",
    description:
      "A JavaScript-based widget for the Scriptable app that provides a convenient way to monitor the status of Bamboo build plans directly from either your iOS or macOS device's home screen.",
    tags: ["JavaScript", "Scriptable"],
    stats: {
      stars: 0,
      forks: 0,
      lang: "JavaScript",
    },
    links: {
      github: "https://github.com/Korysam15/bamboo-scriptable-widget",
    },
  },
  {
    id: 3,
    title: "Atlassian Scriptable Widget",
    description:
      "A JavaScript-based widget for the Scriptable app that provides a convenient way to get updates on open JIRA tickets, pending pull requests and open pull requests from either your iOS or macOS device's home screen.",
    tags: ["JavaScript", "Scriptable"],
    stats: {
      stars: 0,
      forks: 0,
      lang: "TypeScript",
    },
    links: {
      github: "https://github.com/Korysam15/atlassian-scriptable-widget",
    },
  },
  {
    id: 4,
    title: "CBART",
    description:
      "The Tactical Assault Kit (TAK) Chemical Biological Alerting and Response Tool (CBART) is an extendable TAK plugin for CB situational awareness & decision support.",
    tags: ["Java", "Python", "Docker", "Android"],
    stats: {
      stars: 0,
      forks: 0,
      lang: "Java/Python",
    },
    links: {
      demo: "https://aerisllc.com/tactical-assault-kit-cbart/",
    },
  },
  {
    id: 5,
    title: "SNODAS | Daily Snow Data",
    description:
      "A Web Application Tool that provides access to daily SNODAS Snowpack Data for Colorado Water Supply Basins.",
    tags: ["Node.js", "Express", "MongoDB", "Redis"],
    stats: {
      stars: 0,
      forks: 0,
      lang: "HTML/JavaScript",
    },
    links: {
      demo: "https://aerisllc.com/tactical-assault-kit-cbart/",
    },
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Engineering Vault
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Professional & Open Source Projects.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center text-indigo-500 hover:text-indigo-600 font-medium transition-colors mt-4 md:mt-0"
          >
            View all repositories <ExternalLink size={16} className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
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
              className="group relative bg-card hover:bg-card/80 border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500">
                  {project.links?.github && (
                    <a
                      target="_blank"
                      href={project.links.github}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.links?.demo && (
                    <a
                      target="_blank"
                      href={project.links.demo}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 h-20 overflow-hidden text-ellipsis">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star size={14} className="mr-1" />
                    {project.stats.stars}
                  </div>
                  <div className="flex items-center">
                    <GitFork size={14} className="mr-1" />
                    {project.stats.forks}
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2" />
                  {project.stats.lang}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center text-indigo-500 hover:text-indigo-600 font-medium transition-colors"
          >
            View all repositories <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
