import { motion } from "framer-motion";
import { Mic2, Hammer, Plane, MonitorPlay, Box, Radio } from "lucide-react";
import audioImg from "@assets/generated_images/professional_audio_mixing_console.png";
import lightingImg from "@assets/generated_images/premium_stage_led_setup.png";
import visualImg from "@assets/generated_images/interactive_led_installation.png";
import fabricationImg from "@assets/generated_images/cnc_metal_fabrication_machine.png";
import dronesImg from "@assets/generated_images/aerial_concert_drone_footage.png";
import logisticsImg from "@assets/generated_images/professional_drone_equipment.png";

const services = [
  {
    id: "audio",
    icon: Mic2,
    title: "SONIC ARCHITECTURE",
    shortDesc: "Premium audio engineering",
    fullDesc: "Immersive audio environments engineered for absolute clarity. From keynotes to galas, we design acoustic landscapes where every word is heard.",
    image: audioImg,
    specs: ["Audio Design", "Concert-Grade Systems", "Live Sound", "Acoustic Engineering"]
  },
  {
    id: "lighting",
    icon: MonitorPlay,
    title: "ILLUMINATION & ATMOSPHERE",
    shortDesc: "Transformative lighting design",
    fullDesc: "Transforming physical spaces into brand experiences. We use advanced lighting to dictate energy and reinforce visual identity.",
    image: lightingImg,
    specs: ["Lighting Design", "Dynamic Systems", "Atmospheric Control", "Brand Integration"]
  },
  {
    id: "visual",
    icon: MonitorPlay,
    title: "INTEGRATED VISUAL SYSTEMS",
    shortDesc: "Seamless LED & projection",
    fullDesc: "Seamless LED integration and 4K projection mapping. We manage technical complexity so your narrative remains the focus.",
    image: visualImg,
    specs: ["LED Integration", "4K Projection", "Content Management", "Real-time Control"]
  },
  {
    id: "fabrication",
    icon: Hammer,
    title: "EXPERIMENTAL FABRICATION",
    shortDesc: "Bespoke custom builds",
    fullDesc: "Our in-house lab turns sketches into reality. Bespoke stages and interactive activations tailored to your brand's DNA.",
    image: fabricationImg,
    specs: ["Stage Design", "CNC Machining", "Custom Builds", "Precision Engineering"]
  },
  {
    id: "drones",
    icon: Plane,
    title: "AERIAL INTELLIGENCE",
    shortDesc: "Cinematic capture & surveying",
    fullDesc: "High-end cinematic capture and site-mapping. A literal bird's-eye view of your event's scale and impact.",
    image: dronesImg,
    specs: ["Cinematic Footage", "Live Broadcast", "Drone Mapping", "Aerial Surveys"]
  },
  {
    id: "logistics",
    icon: Box,
    title: "TACTICAL LOGISTICS",
    shortDesc: "Global production support",
    fullDesc: "Global shipping, permitting, and on-site labor. Our team ensures the behind-the-scenes stays entirely out of sight.",
    image: logisticsImg,
    specs: ["International Freight", "Customs & Permitting", "On-site Labor", "Equipment Management"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-4">THE PRECISION SUITE</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Six specialized capabilities designed to execute your vision with technical precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="relative overflow-hidden rounded-lg border border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-secondary">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-black text-white mb-1">{service.title}</h3>
                      <p className="text-primary font-bold text-xs">{service.shortDesc}</p>
                    </div>
                    <service.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-slate-300 mb-4 text-sm leading-relaxed flex-grow">
                    {service.fullDesc}
                  </p>

                  {/* Specs */}
                  <div className="space-y-2">
                    {service.specs.map((spec, i) => (
                      <div key={i} className="flex items-center text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary mr-2" />
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
