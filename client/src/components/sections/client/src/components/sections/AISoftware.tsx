import { motion } from "framer-motion";
import { Cpu, Zap, Code2, Bot, Palette, Mic2, Brain, UserCircle2, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "BUSINESS AI INTEGRATION",
    description: "Custom-built LLMs and workflow automation to streamline your operations."
  },
  {
    icon: Zap,
    title: "EVENT TECHNOLOGY",
    description: "High-end AI activations and interactive software for immersive brand experiences."
  },
  {
    icon: Code2,
    title: "FULL-STACK DEVELOPMENT",
    description: "Enterprise-grade web and mobile applications designed for scale."
  }
];

const signatureExperiences = [
  {
    icon: Bot,
    title: "AI 'ZOLTAR' ORACLE",
    description: "A modern, AI-powered twist on the classic fortune teller. Guests speak to a digital persona that uses real-time LLM processing for brand-aligned 'prophecies'."
  },
  {
    icon: Palette,
    title: "ROBOTIC AI CARICATURIST",
    description: "Automated station where a high-precision robotic arm sketches guest portraits in under 60 seconds using custom image-to-sketch models."
  },
  {
    icon: Mic2,
    title: "AI VOICE CLONE KARAOKE",
    description: "A mind-bending audio experience where guests record a snippet of their voice and have it instantly cloned to 'sing' any track in the mix."
  },
  {
    icon: Brain,
    title: "NEURAL-LINK VISUALIZER",
    description: "BCI activation that reads guest focus/calm levels and translates them into generative digital art on the main screens."
  },
  {
    icon: UserCircle2,
    title: "AVATAR CREATION HUB",
    description: "Scans guests and generates high-fidelity 3D avatars for use in the event's 'metaverse' or for personalized digital takeaways."
  },
  {
    icon: Rocket,
    title: "BESPOKE AI ARCHITECTURE",
    subtitle: "If you can imagine it, we can code and build it.",
    description: "From generative murals to custom brand concierges, we build custom hardware-software hybrids from the ground up."
  }
];

export default function AISoftware() {
  return (
    <section id="ai-software" className="py-32 bg-secondary/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
              AI & CUSTOM <span className="text-primary">SOFTWARE SOLUTIONS</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Beyond our standard offerings, K.M. Productions provides a full-stack engineering team dedicated to bespoke builds. 
            </p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {pillars.map((pillar, index) => (
            <div key={index} className="p-8 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors group">
              <pillar.icon className="w-6 h-6 text-primary mb-6" />
              <h3 className="text-xl font-black mb-4 text-white uppercase tracking-wider">{pillar.title}</h3>
              <p className="text-slate-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-32">
          <h3 className="text-3xl md:text-4xl font-black mb-16 uppercase tracking-tighter">
            SIGNATURE <span className="text-primary">AI EXPERIENCES</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureExperiences.map((exp, index) => (
              <div key={index} className="p-8 rounded-lg border border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 group flex flex-col h-full">
                <exp.icon className="w-6 h-6 text-primary mb-6" />
                <h4 className="text-lg font-black mb-1 text-white uppercase tracking-wider">{exp.title}</h4>
                {'subtitle' in exp && <p className="text-primary text-xs font-bold mb-3 uppercase tracking-widest">{exp.subtitle}</p>}
                <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
