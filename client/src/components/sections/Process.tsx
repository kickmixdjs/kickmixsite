import { motion } from "framer-motion";
import meetingImg from "@assets/generated_images/professional_meeting_room.png";
import conferenceImg from "@assets/generated_images/corporate_av_conference_setup.png";
import launchImg from "@assets/generated_images/product_launch_event_stage.png";

const steps = [
  {
    number: "01",
    title: "Creative Briefing",
    description: "We meet to discuss your vision, goals, budget, and timeline, creating a project portfolio to guide the process."
  },
  {
    number: "02",
    title: "Brainstorming",
    description: "Our team reviews the portfolio and renders numerous creative solutions for all project particulars."
  },
  {
    number: "03",
    title: "Concept Presentation",
    description: "Initial concepts are presented to you for discussion and feedback."
  },
  {
    number: "04",
    title: "Revision",
    description: "Client-approved ideas are evaluated and revised according to budget, time, and brand expectations."
  },
  {
    number: "05",
    title: "Final Concept",
    description: "The polished concept is presented one last time for final approval."
  },
  {
    number: "06",
    title: "Execution",
    description: "Our build team takes over, fabricating and setting up the project to the exact agreed-upon specifications."
  }
];

const processImages = [meetingImg, conferenceImg, launchImg];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-background border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Process Steps */}
          <div className="lg:col-span-2">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-4">OUR PROCESS</h2>
              <p className="text-muted-foreground text-lg">
                A proven, collaborative workflow to ensure your vision is realized perfectly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-lg border border-border/50 bg-secondary/10 hover:bg-secondary/30 transition-all hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-6xl font-black font-display text-primary">{step.number}</span>
                  </div>
                  
                  <div className="relative z-10">
                    <span className="text-primary font-mono text-xs font-bold mb-2 block uppercase tracking-widest">Step {step.number}</span>
                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="hidden lg:flex flex-col gap-6">
            {processImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative rounded-lg overflow-hidden border border-border/50 shadow-lg group h-48"
              >
                <img 
                  src={img} 
                  alt={`Process step ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
