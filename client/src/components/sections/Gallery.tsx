import { motion } from "framer-motion";
import weddingImg from "@assets/generated_images/wedding_reception_venue.png";
import concertImg from "@assets/generated_images/outdoor_concert_venue_crowd.png";
import nightclubImg from "@assets/generated_images/luxury_nightclub_interior.png";
import productImg from "@assets/generated_images/product_launch_event_stage.png";
import beachImg from "@assets/generated_images/beach_wedding_ceremony_sunset.png";

const galleryItems = [
  {
    title: "Wedding Reception",
    category: "CELEBRATIONS",
    image: weddingImg
  },
  {
    title: "Festival Production",
    category: "LARGE SCALE",
    image: concertImg
  },
  {
    title: "Nightclub Experience",
    category: "NIGHTLIFE",
    image: nightclubImg
  },
  {
    title: "Product Launch",
    category: "CORPORATE",
    image: productImg
  },
  {
    title: "Beach Ceremony",
    category: "OUTDOOR EVENTS",
    image: beachImg
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">EVENT TYPES</h2>
          <p className="text-muted-foreground text-lg">
            From intimate gatherings to massive productions, we handle every event type with precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <span className="text-primary text-xs font-bold tracking-widest mb-2 block uppercase">
                  {item.category}
                </span>
                <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-300 rounded-lg pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
