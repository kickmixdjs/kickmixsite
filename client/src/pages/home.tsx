import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import AISoftware from "@/components/sections/AISoftware";
import Portfolio from "@/components/sections/Portfolio";
import Gallery from "@/components/sections/Gallery";
import Installations from "@/components/sections/Installations";
import PhotoBoothCustomization from "@/components/sections/PhotoBoothCustomization";
import Process from "@/components/sections/Process";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Services />
      <AISoftware />
      <Portfolio />
      <Gallery />
      <Installations />
      <PhotoBoothCustomization />
      <Process />
      <Clients />
      <Testimonials />
      <Footer />
    </div>
  );
}

