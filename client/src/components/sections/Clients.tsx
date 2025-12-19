const clients = [
  "Apple", "Disney", "Volkswagen", "AT&T", "T-Mobile", "Rockstar Energy", 
  "Uber", "Samsung", "Sony", "NASA", "Tesla", "Microsoft", 
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
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">TRUSTED BY</h2>
      </div>

      {/* Marquee 1 - Clients */}
      <div className="relative flex overflow-x-hidden group mb-20">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-3xl md:text-5xl font-black text-muted-foreground/20 uppercase font-display tracking-tighter">
          {clients.concat(clients).map((client, i) => (
            <span key={i} className="hover:text-primary/60 transition-colors cursor-default">
              {client}
            </span>
          ))}
        </div>
        <div className="absolute top-0 flex overflow-x-hidden animate-marquee2 whitespace-nowrap gap-12 text-3xl md:text-5xl font-black text-muted-foreground/20 uppercase font-display tracking-tighter">
          {clients.concat(clients).map((client, i) => (
            <span key={i} className="hover:text-primary/60 transition-colors cursor-default">
              {client}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-primary font-mono text-sm uppercase tracking-widest mb-4">Artists We've Supported</p>
      </div>

      {/* Marquee 2 - Artists */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee-reverse whitespace-nowrap flex gap-12 text-2xl md:text-4xl font-bold text-muted-foreground/10 uppercase font-sans tracking-wide">
          {artists.concat(artists).map((artist, i) => (
            <span key={i} className="hover:text-white transition-colors cursor-default">
              {artist}
            </span>
          ))}
        </div>
        <div className="absolute top-0 flex overflow-x-hidden animate-marquee2-reverse whitespace-nowrap gap-12 text-2xl md:text-4xl font-bold text-muted-foreground/10 uppercase font-sans tracking-wide">
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
