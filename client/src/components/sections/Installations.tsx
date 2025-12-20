import { motion } from "framer-motion";
import { Camera, Dices } from "lucide-react";
import photoBoothImg from "@assets/generated_images/luxury_photo_booth_in_nightclub.png";
import interactiveGamesImg from "@assets/generated_images/ping_pong_toss_game_bar_setup.png";
import photoBoothLoungImg from "@assets/generated_images/photo_booth_lounge_installation.png";
import moreGamesImg from "@assets/generated_images/interactive_games_nightclub_installation.png";

const installations = [
  {
    id: "photo-booths",
    icon: Camera,
    title: "PHOTO BOOTH EXPERIENCES",
    shortDesc: "Premium branded photo installations",
    fullDesc: "Custom-designed photo booths for bars, clubs, and venues. Brand your experience with custom graphics, lighting, and interactive features. Available for permanent installations and event rentals.",
    features: ["Custom Vinyl Wrapping", "LED Lighting Systems", "Digital & Print Output", "Social Media Integration"],
    images: [photoBoothImg, photoBoothLoungImg]
  },
  {
    id: "interactive-games",
    icon: Dices,
    title: "INTERACTIVE GAMES & ENTERTAINMENT",
    shortDesc: "Custom physical entertainment installations",
    fullDesc: "Creative, interactive games and entertainment installations designed to drive engagement and revenue. From ping pong toss to custom-built games, we create memorable experiences that keep guests entertained. Permanent installations and event rentals available.",
    features: ["Custom Game Design & Build", "Ping Pong Toss & Cornhole", "Creative Interactive Experiences", "Revenue-Generating Setups"],
    images: [interactiveGamesImg, moreGamesImg]
  }
];

export default function Installations() {
  return (
    <section id="installations" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-4">VENUE EXPERIENCES</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Custom photo booths and interactive entertainment installations designed to maximize engagement and revenue for bars, clubs, and nightlife venues.
          </p>
        </div>

        {/* Installation Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {installations.map((install, index) => (
            <motion.div
              key={install.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg border border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-all duration-500">
                {/* Top Image */}
                <div className="relative h-96 overflow-hidden bg-secondary">
                  <img
                    src={install.images[0]}
                    alt={install.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-1">{install.title}</h3>
                      <p className="text-primary font-bold text-sm">{install.shortDesc}</p>
                    </div>
                    <install.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {install.fullDesc}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {install.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Bottom Image */}
                  <div className="relative h-48 overflow-hidden rounded-lg border border-border/30">
                    <img
                      src={install.images[1]}
                      alt={`${install.title} details`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary/10 border border-border/50 rounded-lg p-12"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black mb-4 text-primary">PERMANENT INSTALLATIONS</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We handle complete design, fabrication, and installation of custom photo booths and interactive entertainment systems. From concept through setup, we ensure seamless integration into your venue. Professional installation teams and ongoing maintenance support included.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-slate-300">Complete design & custom fabrication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-slate-300">Professional installation & setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-slate-300">Ongoing maintenance & support</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4 text-primary">RENTAL OPTIONS</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Need entertainment for a one-time event? We provide short-term rentals of photo booths and interactive games for concerts, festivals, private events, and special promotions. Full technical support and operator assistance available.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-slate-300">Flexible short-term rental periods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-slate-300">Complete technical support included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-slate-300">Delivery, setup, and operator services</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
