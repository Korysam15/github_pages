import { CheckCircle2 } from "lucide-react";

export function RecognitionImpact() {
  return (
    <section id="impact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="dark:bg-zinc-900 rounded-3xl overflow-hidden text-card-foreground shadow-2xl border border-border">
          <div className="p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Recognition & Impact
            </h2>

            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-3xl">
              Highlights of measurable impact, technical execution, and
              peer-recognized contributions across engineering leadership,
              debugging excellence, and rapid product delivery.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle2
                  className="text-primary mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-muted-foreground">
                  Resolved 8 high-priority production bugs during a company-wide
                  Bugathon and awarded the{" "}
                  <span className="text-foreground font-semibold">
                    “Bug Squasher”
                  </span>{" "}
                  title for top debugging contribution.
                </span>
              </div>

              <div className="flex items-start">
                <CheckCircle2
                  className="text-primary mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-muted-foreground">
                  Built a real-time JSON editor in Vue.js during a 24-hour
                  internal hackathon, winning the{" "}
                  <span className="text-foreground font-semibold">
                    People’s Choice Award
                  </span>{" "}
                  for usability and execution under tight constraints.
                </span>
              </div>

              <div className="flex items-start">
                <CheckCircle2
                  className="text-primary mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-muted-foreground">
                  Recipient of the{" "}
                  <span className="text-foreground font-semibold">
                    Aeris Apex Award
                  </span>
                  , recognizing sustained excellence, mission-critical delivery,
                  and consistent alignment with organizational values.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
