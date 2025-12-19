import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic2, Hammer, Plane, MonitorPlay, Box } from "lucide-react";
import { motion } from "framer-motion";
import productionImg from "@assets/generated_images/concert_stage_production_setup.png";
import fabricationImg from "@assets/generated_images/custom_fabrication_workshop.png";
import dronesImg from "@assets/generated_images/aerial_drone_city_view.png";
import interactiveImg from "@assets/generated_images/interactive_led_video_wall.png";
import logisticsImg from "@assets/generated_images/logistics_warehouse_operation.png";

const services = [
  {
    id: "production",
    label: "Event Production",
    icon: Mic2,
    title: "Full-Scale Event Production",
    description: "From intimate occasions to worldwide keynotes, we provide polished, full-scale production services. We handle sound, staging, lighting, special effects, and much more to create unforgettable live experiences.",
    features: [
      "Concert-grade audio & lighting",
      "Large-scale staging & rigging",
      "Special FX including cryogenics & pyrotechnics",
      "Worldwide keynote & corporate event production"
    ],
    image: productionImg
  },
  {
    id: "fabrication",
    label: "Custom Fabrication",
    icon: Hammer,
    title: "Custom Scenic Fabrication",
    description: "Our in-house fabrication team builds custom stages, scenic elements, and brand activations that defy gravity and expectation.",
    features: [
      "Custom stage design & build",
      "Trade show booths & activations",
      "Permanent installations",
      "CNC machining & 3D printing"
    ],
    image: fabricationImg
  },
  {
    id: "drones",
    label: "Drone Services",
    icon: Plane,
    title: "Aerial Drone Services",
    description: "Capture stunning aerial perspectives with our licensed drone pilots and high-end cinema equipment.",
    features: [
      "Live broadcast aerials",
      "Commercial cinematography",
      "Drone light shows",
      "Inspection & surveying"
    ],
    image: dronesImg
  },
  {
    id: "interactive",
    label: "Interactive Rentals",
    icon: MonitorPlay,
    title: "Interactive Technology",
    description: "Engage your audience with cutting-edge interactive technology rentals and custom software solutions.",
    features: [
      "Touch screens & kiosks",
      "VR/AR experiences",
      "LED video walls",
      "Gamification & apps"
    ],
    image: interactiveImg
  },
  {
    id: "logistics",
    label: "Importing & Logistics",
    icon: Box,
    title: "Global Logistics",
    description: "We handle the complex logistics of getting gear and teams where they need to be, anywhere in the world.",
    features: [
      "International freight",
      "Customs brokerage",
      "Tour trucking & transport",
      "Warehousing & storage"
    ],
    image: logisticsImg
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">OUR SERVICES</h2>
          <p className="text-muted-foreground text-lg">
            Click a tab to see how we can help bring your vision to life.
          </p>
        </div>

        <Tabs defaultValue="production" className="w-full max-w-5xl mx-auto">
          <TabsList className="flex flex-wrap h-auto justify-center gap-2 bg-transparent p-0 mb-12">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-secondary/50 border border-border px-6 py-3 rounded-md transition-all hover:bg-secondary"
              >
                {service.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-secondary/20 border-border/50 backdrop-blur-sm overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                        <service.icon size={24} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display text-white">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm font-medium text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="min-h-[300px] relative overflow-hidden group">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-background via-background/40 to-transparent" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
