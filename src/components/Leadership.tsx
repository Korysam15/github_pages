import { motion } from "framer-motion";
import { Users, GitPullRequest, Mic, Wrench } from "lucide-react";
const leadershipTraits = [
  {
    icon: Users,
    title: "Team Growth & Mentorship",
    description:
      "Guided multiple junior developers to senior roles through structured mentorship plans, regular 1:1s, and career pathing workshops.",
  },
  {
    icon: GitPullRequest,
    title: "Code Review Culture",
    description:
      "Established rigorous code review standards focusing on maintainability, security, and performance, reducing production bugs by 35%.",
  },
  {
    icon: Wrench,
    title: "Developer Experience & Tooling",
    description:
      "Improved developer workflows through CI/CD automation, internal libraries, and testing frameworks, reducing friction and increasing release confidence.",
  },
  {
    icon: Mic,
    title: "Knowledge Sharing",
    description:
      'Organized weekly "Lunch & Learn" sessions to discuss new technologies.',
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Leadership & Culture
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Beyond code: fostering engineering excellence and team growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipTraits.map((trait, index) => (
            <motion.div
              key={trait.title}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="flex gap-6 p-6 rounded-2xl bg-background border border-border shadow-sm"
            >
              <div className="flex-shrink-0">
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500">
                  <trait.icon size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{trait.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {trait.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
