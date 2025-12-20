import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary/30 border-t border-border pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              HAVE A PROJECT <br />
              <span className="text-gradient">IN MIND?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-md">
              Based in Anaheim, California, we proudly service all of Southern California and beyond. Let's talk about how we can make your project happen.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-white">Headquarters</h4>
                  <p className="text-muted-foreground">Anaheim, CA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-white">Email Us</h4>
                  <a href="mailto:info@kick-mix.com" className="text-muted-foreground hover:text-white transition-colors">
                    info@kick-mix.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background border border-border/50 rounded-2xl p-8 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Name</label>
                  <Input placeholder="John Doe" className="bg-secondary/50 border-border/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <Input placeholder="john@example.com" type="email" className="bg-secondary/50 border-border/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Service of Interest</label>
                <Select>
                  <SelectTrigger className="bg-secondary/50 border-border/50">
                    <SelectValue placeholder="Select a service..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="production">Event Production</SelectItem>
                    <SelectItem value="fabrication">Custom Fabrication</SelectItem>
                    <SelectItem value="drones">Drone Services</SelectItem>
                    <SelectItem value="interactive">Interactive Rentals</SelectItem>
                    <SelectItem value="logistics">Importing & Logistics</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <Textarea placeholder="Tell us about your project..." className="min-h-[120px] bg-secondary/50 border-border/50" />
              </div>

              <Button size="lg" className="w-full font-bold bg-primary text-primary-foreground hover:bg-primary/90">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} K.M Productions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
