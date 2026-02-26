import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
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
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to Connect?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I’m currently exploring new roles and opportunities in full-stack
            development, with a strong interest in leveraging AI and automation
            to solve challenging problems. I’d love to connect if you have an
            exciting project to tackle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:kkudda15@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors w-full sm:w-auto justify-center"
            >
              <Mail className="mr-2" size={18} />
              Send an Email
            </a>
            <a
              href="tel:7202126602"
              className="inline-flex items-center px-6 py-3 bg-background border border-border text-foreground rounded-full font-medium hover:bg-muted transition-colors w-full sm:w-auto justify-center"
            >
              Schedule a Call
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              target="_blank"
              href="http://github.com/korysam15/"
              className="text-muted-foreground hover:text-indigo-500 transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/clarkkory/"
              className="text-muted-foreground hover:text-indigo-500 transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
