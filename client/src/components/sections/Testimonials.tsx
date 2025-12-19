import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import weddingImg from "@assets/generated_images/wedding_reception_venue.png";
import concertImg from "@assets/generated_images/outdoor_concert_venue_crowd.png";
import nightclubImg from "@assets/generated_images/luxury_nightclub_interior.png";
import beachImg from "@assets/generated_images/beach_wedding_ceremony_sunset.png";

const testimonials = [
  {
    quote: "K.M Productions consistently delivers beyond expectations. Their attention to detail and ability to execute complex fabrications on a tight deadline is unmatched.",
    author: "Senior Producer",
    company: "Major Film Studio",
    image: weddingImg
  },
  {
    quote: "For our annual keynote, we needed a flawless technical production. The team handled everything from audio to lighting perfectly. True professionals.",
    author: "Director of Events",
    company: "Fortune 500 Tech Company",
    image: concertImg
  },
  {
    quote: "The custom trade show booth they built for us was the star of the convention. The design was brilliant and the interactive elements were a huge hit.",
    author: "Marketing Manager",
    company: "T-Mobile",
    image: nightclubImg
  },
  {
    quote: "Their drone team provided stunning aerial footage for our commercial. They're not just pilots; they're artists with a technical edge.",
    author: "Creative Director",
    company: "Automotive Brand",
    image: beachImg
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">WHAT OUR CLIENTS SAY</h2>
          <p className="text-muted-foreground text-lg">
            Trusted by the industry's leading brands and event professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-lg border border-border/50 bg-background hover:border-primary/30 transition-all"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-secondary">
                <img 
                  src={t.image} 
                  alt={t.company}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              {/* Testimonial */}
              <div className="p-8 relative">
                <Quote className="text-primary mb-4 opacity-40" size={28} />
                <p className="text-lg font-light italic text-slate-200 mb-6 leading-relaxed min-h-[80px]">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-between border-t border-border/30 pt-4">
                  <div>
                    <div className="font-bold text-white text-sm">{t.author}</div>
                    <div className="text-primary text-xs font-mono">{t.company}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Quote className="text-primary opacity-50" size={16} />
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
