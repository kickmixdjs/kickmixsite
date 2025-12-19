import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Kick-Mix consistently delivers beyond expectations. Their attention to detail and ability to execute complex fabrications on a tight deadline is unmatched.",
    author: "Senior Producer",
    company: "Major Film Studio"
  },
  {
    quote: "For our annual keynote, we needed a flawless technical production. The team handled everything from audio to lighting perfectly. True professionals.",
    author: "Director of Events",
    company: "Fortune 500 Tech Company"
  },
  {
    quote: "The custom trade show booth they built for us was the star of the convention. The design was brilliant and the interactive elements were a huge hit.",
    author: "Marketing Manager",
    company: "T-Mobile"
  },
  {
    quote: "Their drone team provided stunning aerial footage for our commercial. They're not just pilots; they're artists with a technical edge.",
    author: "Creative Director",
    company: "Automotive Brand"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">WHAT OUR CLIENTS SAY</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-secondary/10 border-border/30 hover:bg-secondary/20 transition-colors">
              <CardContent className="p-8">
                <Quote className="text-primary mb-6 opacity-50" size={32} />
                <p className="text-xl md:text-2xl font-light italic text-slate-200 mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-primary text-sm font-mono">{t.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
