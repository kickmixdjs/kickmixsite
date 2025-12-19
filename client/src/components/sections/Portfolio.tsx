import { motion } from "framer-motion";
import festivalImg from "@assets/generated_images/large_festival_stage_with_crowd.png";
import galaImg from "@assets/generated_images/corporate_gala_event_production.png";
import nightclubImg from "@assets/generated_images/nightclub_dj_setup_with_lasers.png";
import projectionImg from "@assets/generated_images/projection_mapping_light_show.png";
import awardShowImg from "@assets/generated_images/award_show_stage_production.png";
import bandImg from "@assets/generated_images/live_band_concert_performance.png";

const portfolio = [
  {
    title: "Festival Production",
    category: "LARGE SCALE",
    image: festivalImg,
    description: "50,000+ capacity outdoor festival with multi-stage production"
  },
  {
    title: "Corporate Gala",
    category: "CORPORATE",
    image: galaImg,
    description: "High-end corporate event with premium production design"
  },
  {
    title: "Nightclub Experience",
    category: "NIGHTLIFE",
    image: nightclubImg,
    description: "Full-featured nightclub production with DJ and dance floor"
  },
  {
    title: "Projection Mapping",
    category: "IMMERSIVE",
    image: projectionImg,
    description: "Dynamic projection mapping light show on building facade"
  },
  {
    title: "Awards Show",
    category: "BROADCAST",
    image: awardShowImg,
    description: "Professional awards ceremony with broadcast-quality production"
  },
  {
    title: "Concert Performance",
    category: "LIVE MUSIC",
    image: bandImg,
    description: "Full concert production with professional lighting and sound"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-secondary/5 border-y border-border/40">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-4">FEATURED WORK</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A selection of recent productions showcasing our capabilities.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-secondary">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <span className="text-primary text-xs font-bold tracking-widest mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-2xl font-black text-white mb-2">{item.title}</h3>
                <p className="text-slate-200 text-sm">
                  {item.description}
                </p>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-300 rounded-lg pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
