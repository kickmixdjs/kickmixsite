import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/large_festival_stage_with_crowd.png";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image - Full Cover */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroBg}
          alt="Festival Stage"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight text-white">
            EVENTS <br />
            <span className="text-gradient">EVOLVED</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 mb-12 font-light max-w-2xl mx-auto">
            Full-scale production from concept to execution
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base h-12 px-8 font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(14,165,233,0.3)] cursor-pointer">
              <a href="#contact">GET STARTED</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base h-12 px-8 border-white text-white hover:bg-white/10 font-bold cursor-pointer">
              <a href="#work">
                EXPLORE WORK <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}