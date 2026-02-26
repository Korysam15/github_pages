import { motion } from "framer-motion";
import { Calendar, Building2, Trophy } from "lucide-react";
const experiences = [
  {
    id: 1,
    role: "Software Engineer AI/ML | T4",
    company: "CACI Interntaional Inc.",
    period: "Sep 2025 - Present",
    description:
      "Develop and maintain AWS-based REST APIs with Lambda and RDS, including secure data modeling, validation, and integration patterns. Build Svelte web applications supporting live video streams and AI-powered tracking, create reusable components, and implement CI/CD pipelines to deliver reliable TypeScript SDKs. Collaborate with data scientists and backend engineers to optimize real-time video rendering, model inference, and frontend architecture for scalable, maintainable solutions.",
    stack: [
      "TypeScript",
      "Svelte",
      "Tailwindcss",
      "Vite",
      "Prettier",
      "AWS",
      "Figma",
    ],
    achievement:
      "Designed and deployed a Svelte web application with AI-powered tracking, improving live video data accuracy and interaction performance by 30%.",
    impact:
      "Enabled faster, more reliable visual analytics at scale, driving adoption of AI-powered insights across teams and improving operational decision-making.",
  },
  {
    id: 2,
    role: "Senior Software Engineer Team Lead",
    company: "Cherokee Federal",
    period: "Oct 2024 - Sep 2025",
    description:
      "Led a small team of developers while guiding software architecture across multiple repositories supporting ~25 engineers. Developed and maintained a Geospatial Intelligence platform using Svelte and TypeScript, implemented automated Elasticsearch migration scripts, and built internal libraries and testing frameworks to streamline development and ensure high-quality releases.",
    stack: [
      "OpenAPI",
      "Playwright",
      "Elasticsearch",
      "TypeScript",
      "Svelte",
      "Vite",
      "Tailwindcss",
      "Prettier",
      "Turbo",
      "Lint",
      "Argocd",
      "Vue.js",
    ],
    achievement:
      "Rolled out Playwright-based end-to-end testing and internal API automation, dramatically improving test coverage and reducing manual work for developers.",
    impact:
      "Increased deployment confidence, reduced bugs in production, and accelerated team productivity by standardizing architecture, testing, and developer workflows.",
  },
  {
    id: 3,
    role: "Senior Software Engineer",
    company: "Aeris LLC",
    period: "Jun 2019 - Feb 2024",
    description:
      "Led and contributed to multiple projects spanning web, mobile, and Windows software applications, with a focus on high-performance computing, geospatial data management, and scientific modeling. Developed and maintained RESTful APIs, automated workflows with Docker and Singularity, and built reusable React component libraries, ensuring scalability, reliability, and maintainability across the organization. Facilitated onboarding, mentorship, and knowledge sharing to strengthen team capabilities and collaboration.",
    stack: ["JavaScript", "Vue.js", "SCSS", "Webpack"],
    achievement:
      "Expanded a third-party fluid dynamics modeling software with a RESTful API, enabling broader usage and helping secure four multi-year contracts.",
    impact:
      "Streamlined software deployment and data processing, improving reliability, accelerating project delivery, and enabling faster, data-driven decision-making.",
  },
  {
    id: 4,
    role: "Software Engineer I",
    company: "MiTek",
    period: "Jun 2018 - Jun 2019",
    description:
      "Developed, enhanced, and maintained CAD/engineering software using C#, WinForms, and the .NET Framework. Tested and debugged existing systems to ensure accuracy and reliability in structural modeling tools.",
    stack: ["JavaScript", "Vue.js", "SCSS", "Webpack"],
    achievement:
      "Refactored legacy code responsible for calculating wall strapping distances and quantities, improving accuracy and maintainability of the software.",
    impact:
      "Reduced calculation errors and bugs, improved model reliability for engineers, and streamlined workflows for designing wall structures.",
  },
  {
    id: 4,
    role: "Student Intern",
    company: "Aeris LLC",
    period: "Dec 2017 - Mar 2018",
    description:
      "Designed and developed an innovative iOS application in Swift leveraging augmented reality to project golf ball trajectories in real time. Integrated club selection, wind speed, and direction to provide accurate 2D and 3D visualizations, enhancing user experience and interaction.",
    stack: ["JavaScript", "Vue.js", "SCSS", "Webpack"],
    achievement:
      "Delivered a fully functional AR golf app prototype that demonstrated advanced real-time physics modeling and immersive visualization.",
    impact:
      "Enabled intuitive, data-driven golf performance analysis, providing users with actionable insights and a highly engaging experience.",
  },
  {
    id: 5,
    role: "Student Intern",
    company: "Open Water Foundation",
    period: "May 2016 - Dec 2017",
    description:
      "Developed Java-based tools and APIs for processing WaterML 2.0 time series and XML data, including schema parsing, an XML visualizer, and endpoints for the TSTool. Built automation scripts and static web applications to simplify software installation, deployment, and testing workflows, improving efficiency across multiple projects.",
    stack: ["Java", "HTML", "JavaScript", "Python"],
    achievement:
      "Created a static web application displaying Snow Water Equivalent data, improving accessibility of statewide hydrological information.",
    impact:
      "Provided stakeholders with an intuitive data visualization platform, supporting faster, data-driven decision-making.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A track record of technical leadership and delivering business value
            through engineering excellence.
          </p>
        </div>

        <div className="relative border-l border-border ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-background" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <div className="flex items-center text-muted-foreground mt-1 text-sm">
                    <Building2 size={14} className="mr-1.5" />
                    <span className="mr-3">{exp.company}</span>
                    <Calendar size={14} className="mr-1.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-indigo-500/5 rounded-lg p-4 border border-indigo-500/10">
                    <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-semibold mb-2 text-sm">
                      <Trophy size={16} className="mr-2" />
                      Key Achievement
                    </div>
                    <p className="text-sm text-foreground/80">
                      {exp.achievement}
                    </p>
                  </div>
                  <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-lg p-4 border border-border">
                    <div className="flex items-center text-foreground font-semibold mb-2 text-sm">
                      Business Impact
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {exp.impact}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
