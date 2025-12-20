import { motion } from "framer-motion";
import boothInteriorImg from "@assets/generated_images/photo_booth_interior_mechanics.png";
import boothExteriorImg from "@assets/generated_images/branded_photo_booth_exterior.png";

export default function PhotoBoothCustomization() {
  return (
    <section className="py-32 bg-secondary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            THE ANATOMY OF A CUSTOM <span className="text-primary">PHOTO BOOTH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Every element engineered for your brand. From the moment your guest steps in, they're experiencing a carefully designed, fully customizable environment.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Philosophy & Design */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* The Design Philosophy */}
            <div className="bg-background border border-border/50 rounded-lg p-8 hover:bg-secondary/20 transition-all">
              <h3 className="text-xl font-black text-primary mb-4 uppercase tracking-wider">THE PHILOSOPHY</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Every photo booth is a brand ambassador. We design each one as a unique experience that reflects your venue's identity and drives engagement.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-primary font-bold">▸</span>
                  <div>
                    <p className="font-bold text-white text-sm">BRAND ALIGNMENT</p>
                    <p className="text-muted-foreground text-sm">Custom graphics, colors, and branding integrated into every surface</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">▸</span>
                  <div>
                    <p className="font-bold text-white text-sm">GUEST EXPERIENCE</p>
                    <p className="text-muted-foreground text-sm">Intuitive interface, instant feedback, shareable moments</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">▸</span>
                  <div>
                    <p className="font-bold text-white text-sm">DATA COLLECTION</p>
                    <p className="text-muted-foreground text-sm">Capture emails, phone numbers, and engagement metrics</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Technology */}
            <div className="bg-background border border-border/50 rounded-lg p-8 hover:bg-secondary/20 transition-all">
              <h3 className="text-xl font-black text-primary mb-4 uppercase tracking-wider">THE TECHNOLOGY</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Cinema-grade capture meets modern reliability. Engineered for venues that demand flawless operation.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-primary font-bold">▸</span>
                  <div>
                    <p className="font-bold text-white text-sm">OPTICAL SYSTEM</p>
                    <p className="text-muted-foreground text-sm">Professional DSLR camera with custom lens setup for perfect frames</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">▸</span>
                  <div>
                    <p className="font-bold text-white text-sm">LIGHTING DESIGN</p>
                    <p className="text-muted-foreground text-sm">Programmable LED arrays with color customization</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold">▸</span>
                  <div>
                    <p className="font-bold text-white text-sm">PRINT ENGINE</p>
                    <p className="text-muted-foreground text-sm">High-speed dye-sublimation printing for instant 4x6 or custom strips</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative h-96 overflow-hidden rounded-lg border border-border/50 shadow-lg group">
              <img
                src={boothInteriorImg}
                alt="Photo booth interior mechanics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <p className="text-sm font-mono text-primary">The Interior Mechanics</p>
              </div>
            </div>

            <div className="relative h-96 overflow-hidden rounded-lg border border-border/50 shadow-lg group">
              <img
                src={boothExteriorImg}
                alt="Branded photo booth exterior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <p className="text-sm font-mono text-primary">Fully Customizable Exterior</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Customization Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background border border-border/50 rounded-lg p-12"
        >
          <h3 className="text-2xl font-black mb-8 text-primary uppercase tracking-wider">CUSTOMIZATION OPTIONS</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-black text-white mb-4 text-lg">EXTERIOR DESIGN</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Custom vinyl wrapping</li>
                <li>✓ Full-color brand graphics</li>
                <li>✓ LED accent lighting</li>
                <li>✓ Logo integration</li>
                <li>✓ Material selection</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-white mb-4 text-lg">SOFTWARE & INTERFACE</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Custom on-screen graphics</li>
                <li>✓ Branded opening & closing screens</li>
                <li>✓ Social media watermarking</li>
                <li>✓ Real-time data capture</li>
                <li>✓ Custom filters & effects</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-white mb-4 text-lg">OUTPUT & DELIVERY</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Custom print strip design</li>
                <li>✓ Digital delivery via email</li>
                <li>✓ QR code integration</li>
                <li>✓ SMS text delivery</li>
                <li>✓ Cloud storage & archiving</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
