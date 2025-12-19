import { motion } from "framer-motion";
import { Mic2, Hammer, Plane, MonitorPlay, Box, Sparkles } from "lucide-react";
import productionImg from "@assets/generated_images/concert_stage_production_setup.png";
import fabricationImg from "@assets/generated_images/custom_fabrication_workshop.png";
import dronesImg from "@assets/generated_images/aerial_drone_city_view.png";
import interactiveImg from "@assets/generated_images/interactive_led_video_wall.png";
import logisticsImg from "@assets/generated_images/logistics_warehouse_operation.png";

const services = [
  {
    id: "production",
    icon: Mic2,
    title: "EVENT PRODUCTION",
    shortDesc: "Turnkey solutions for live events",
    fullDesc: "From intimate gatherings to massive festivals, we handle every technical element. Concert-grade audio, dynamic lighting design, precision staging, and special effects bring your vision to life.",
    image: productionImg,
    specs: ["Audio Engineering", "Lighting Design", "Stage Production", "Special Effects"]
  },
  {
    id: "fabrication",
    icon: Hammer,
    title: "CUSTOM FABRICATION",
    shortDesc: "Bespoke scenery & installations",
    fullDesc: "Our in-house fabrication team designs and builds custom stages, scenic elements, and brand activations that push creative boundaries and defy expectations.",
    image: fabricationImg,
    specs: ["Stage Design", "3D Fabrication", "CNC Machining", "Custom Builds"]
  },
  {
    id: "drones",
    icon: Plane,
    title: "DRONE SERVICES",
    shortDesc: "Aerial cinematography & coverage",
    fullDesc: "Capture stunning perspectives with our licensed pilots and cinema-grade equipment. Live aerials, commercial production, and drone light shows that elevate your event.",
    image: dronesImg,
    specs: ["Live Broadcast", "Cinematography", "Drone Light Shows", "Surveying"]
  },
  {
    id: "interactive",
    icon: MonitorPlay,
    title: "INTERACTIVE TECH",
    shortDesc: "Cutting-edge audience engagement",
    fullDesc: "Immersive technology that transforms passive audiences into active participants. LED walls, VR experiences, touch displays, and custom software solutions.",
    image: interactiveImg,
    specs: ["LED Video Walls", "VR/AR", "Touch Screens", "Real-time Systems"]
  },
  {
    id: "logistics",
    icon: Box,
    title: "LOGISTICS & TRANSPORT",
    shortDesc: "End-to-end equipment management",
    fullDesc: "Global logistics expertise to move your production anywhere. International freight, customs brokerage, warehousing, and tour support across all markets.",
    image: logisticsImg,
    specs: ["International Freight", "Tour Support", "Warehousing", "Equipment Management"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-4">SERVICES</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Complete production services tailored to your event's unique demands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg border border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-all duration-500">
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-secondary">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-1">{service.title}</h3>
                      <p className="text-primary font-bold text-sm">{service.shortDesc}</p>
                    </div>
                    <service.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Specs */}
                  <div className="space-y-2">
                    {service.specs.map((spec, i) => (
                      <div key={i} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
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
