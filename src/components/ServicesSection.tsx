import { Zap, Smile, ScanLine, Scissors, AlignLeft, CircleDot, Layers, Stethoscope } from "lucide-react";

const services = [
  { icon: CircleDot, name: "Dental Implants", desc: "Safe and permanent implant solutions — tooth replacement in as little as 72 hours." },
  { icon: Zap, name: "Root Canal Treatment", desc: "Painless root canal therapy to save damaged teeth." },
  { icon: Smile, name: "Teeth Cleaning & Scaling", desc: "Professional cleaning for healthy gums and fresh breath." },
  { icon: AlignLeft, name: "Aligners & Braces", desc: "Straighten your teeth with modern clear aligners or traditional braces." },
  { icon: Scissors, name: "Smile Makeover", desc: "Veneers, bonding, whitening, and complete cosmetic transformations." },
  { icon: ScanLine, name: "Laser Dental Treatments", desc: "Minimally invasive laser procedures for faster healing." },
  { icon: Layers, name: "Full Mouth Rehabilitation", desc: "Complete restoration for complex dental needs." },
  { icon: Stethoscope, name: "General Checkups", desc: "Routine exams and preventive care for the whole family." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container-narrow">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Our Treatments</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Comprehensive Dental Solutions</h2>
        <p className="text-muted-foreground leading-relaxed">
          From routine checkups to advanced implant surgery, we offer a full range of dental services under one roof.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.name} className="group rounded-xl border border-border p-6 hover:border-primary hover:shadow-lg transition-all cursor-default">
            <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">{s.name}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
