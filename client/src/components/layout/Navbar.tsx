import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-border/40 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-2xl font-bold font-display tracking-wider text-foreground cursor-pointer hover:text-primary transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          K<span className="text-primary">.</span>M PRODUCTIONS
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => scrollToSection(e as any, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest bg-transparent border-none cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <Button onClick={(e) => scrollToSection(e as any, "#contact")} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide">
            GET A QUOTE
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => scrollToSection(e as any, link.href)}
              className="text-lg font-medium text-foreground hover:text-primary py-2 bg-transparent border-none cursor-pointer text-left"
            >
              {link.name}
            </button>
          ))}
          <Button onClick={(e) => scrollToSection(e as any, "#contact")} className="w-full bg-primary font-bold">GET A QUOTE</Button>
        </div>
      )}
    </nav>
  );
}
