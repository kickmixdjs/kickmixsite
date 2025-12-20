import { motion } from "framer-motion";

const featuredClients = [
  "Apple", "Disney", "Sony", "Nike", "Google", "Microsoft"
];

const allClients = [
  "Volkswagen", "AT&T", "T-Mobile", "Rockstar Energy", 
  "Uber", "Samsung", "NASA", "Tesla", 
  "Universal", "Verizon", "Lionsgate", "Pixar", "L'Oréal", "P&G", 
  "Nokia", "HP", "Ford", "EA", "NBC", "Pepsi"
];

const artists = [
  "Beyonce", "Coldplay", "Daft Punk", "Drake", "Eminem", "Guns N' Roses", 
  "Jay Z", "Justin Bieber", "Kanye West", "Katy Perry", "Kendrick Lamar", 
  "Lady Gaga", "Maroon 5", "Rihanna", "Rolling Stones", "Skrillex", 
  "Snoop Dogg", "Taylor Swift", "The Weeknd", "Wu-Tang Clan"
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 overflow-hidden bg-secondary/5">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">TRUSTED BY</h2>
        <p className="text-center text-muted-foreground text-lg">
          Partnered with the world's leading brands and entertainment companies
        </p>
      </div>

      {/* Featured Clients - Static */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {featuredClients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-lg md:text-2xl font-black text-muted-foreground/40 hover:text-primary/60 transition-colors uppercase tracking-tight">
                {client}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-border/30 my-12"></div>

      {/* Additional Clients - Scrolling */}
      <div className="mb-20">
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-12 text-2xl md:text-3xl font-bold text-muted-foreground/15 uppercase font-display tracking-tight">
            {allClients.concat(allClients).map((client, i) => (
              <span key={i} className="hover:text-primary/50 transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
          <div className="absolute top-0 flex overflow-x-hidden animate-marquee2 whitespace-nowrap gap-12 text-2xl md:text-3xl font-bold text-muted-foreground/15 uppercase font-display tracking-tight">
            {allClients.concat(allClients).map((client, i) => (
              <span key={i} className="hover:text-primary/50 transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-primary font-mono text-sm uppercase tracking-widest mb-4">Artists We've Supported</p>
      </div>

      {/* Marquee 2 - Artists */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee-reverse whitespace-nowrap flex gap-12 text-2xl md:text-3xl font-bold text-muted-foreground/10 uppercase font-sans tracking-wide">
          {artists.concat(artists).map((artist, i) => (
            <span key={i} className="hover:text-white transition-colors cursor-default">
              {artist}
            </span>
          ))}
        </div>
        <div className="absolute top-0 flex overflow-x-hidden animate-marquee2-reverse whitespace-nowrap gap-12 text-2xl md:text-3xl font-bold text-muted-foreground/10 uppercase font-sans tracking-wide">
          {artists.concat(artists).map((artist, i) => (
            <span key={i} className="hover:text-white transition-colors cursor-default">
              {artist}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
