import { motion } from "framer-motion";
import meetingImg from "@assets/generated_images/professional_meeting_room.png";

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

export default function Process() {
  return (
    <section id="process" className="py-24 bg-background border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Process Steps */}
          <div className="lg:col-span-2">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">OUR CREATIVE PROCESS</h2>
              <p className="text-muted-foreground text-lg">
                A proven, collaborative workflow to ensure your vision is realized perfectly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-xl border border-border/50 bg-secondary/10 hover:bg-secondary/30 transition-all hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-black font-display text-primary">{step.number}</span>
              </div>
              
              <div className="relative z-10">
                <span className="text-primary font-mono text-sm font-bold mb-2 block">STEP {step.number}</span>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden lg:block sticky top-24">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <img 
                src={meetingImg} 
                alt="Creative Process Meeting"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <p className="text-sm font-mono text-primary">We collaborate closely with every client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
