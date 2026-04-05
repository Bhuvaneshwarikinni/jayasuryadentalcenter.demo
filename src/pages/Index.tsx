import { Phone, Mail, MapPin, Clock, Star, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dental.jpg";
import doctorImage from "@/assets/doctor-jayanth.jpg";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctor", href: "#doctor" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { icon: "🦷", title: "Dental Implants", desc: "Tooth replacement in as little as 72 hours with advanced implant technology." },
  { icon: "🔧", title: "Root Canal Treatment", desc: "Painless and precise root canal procedures for long-lasting relief." },
  { icon: "✨", title: "Teeth Cleaning & Scaling", desc: "Professional cleaning for healthier gums and brighter teeth." },
  { icon: "😁", title: "Aligners / Braces", desc: "Straighten your teeth with modern clear aligners or traditional braces." },
  { icon: "💎", title: "Cosmetic Dentistry", desc: "Smile makeovers with veneers, bonding, and whitening treatments." },
  { icon: "⚡", title: "Laser Dental Treatments", desc: "Minimally invasive laser procedures for faster healing." },
  { icon: "🏥", title: "Full Mouth Rehabilitation", desc: "Complete restoration for complex dental cases." },
  { icon: "🩺", title: "General Dental Checkups", desc: "Routine exams and preventive care for the whole family." },
];

const REVIEWS = [
  { name: "Priya S.", text: "Treatment was smooth and almost painless. The doctor explained everything clearly. Highly recommended!", rating: 5 },
  { name: "Rahul M.", text: "Very clean and modern clinic. The staff is friendly and caring. Got my implant done here — excellent results!", rating: 5 },
  { name: "Anitha K.", text: "Best dental experience I've ever had. No waiting time, great communication, and affordable too.", rating: 5 },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="text-xl font-extrabold text-gradient">JAYA SURYA</a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
          ))}
          <Button asChild size="sm"><a href="tel:+919945275357">Call Now</a></Button>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background px-4 pb-4 animate-fade-in">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary">{l.label}</a>
          ))}
          <Button asChild className="w-full mt-2" size="sm"><a href="tel:+919945275357">Call Now</a></Button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
    <img src={heroImage} alt="Modern dental clinic interior" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 hero-gradient" />
    <div className="container relative z-10 py-32">
      <div className="max-w-2xl animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground mb-6">
          <Star className="h-4 w-4 fill-current" /> 4.9 Rating · 700+ Reviews
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
          Your Smile,<br />Our Passion
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-lg">
          Advanced dental care with a gentle touch. Experience modern dentistry at JAYA SURYA Dental & Implant Center, Bengaluru.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild><a href="tel:+919945275357"><Phone className="mr-2 h-4 w-4" /> Book Appointment</a></Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="#services">Our Services <ChevronRight className="ml-1 h-4 w-4" /></a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 section-alt">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">About Us</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">Modern Dental Care You Can Trust</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          JAYA SURYA Dental and Advanced Implant Center is a modern dental clinic focused on providing high-quality and patient-friendly dental care. We combine advanced technology with personalized treatment to ensure comfort and effective results.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "📚", label: "Patient Education" },
            { icon: "📋", label: "Transparent Planning" },
            { icon: "🛡️", label: "Safe & Hygienic" },
            { icon: "😌", label: "Stress-Free Care" },
          ].map(v => (
            <div key={v.label} className="bg-background rounded-xl p-6 shadow-sm border">
              <span className="text-3xl mb-3 block">{v.icon}</span>
              <span className="font-semibold text-foreground text-sm">{v.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-20">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Services</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Comprehensive Dental Care</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map(s => (
          <div key={s.title} className="group bg-background rounded-xl p-6 border hover:border-primary/40 hover:shadow-lg transition-all duration-300">
            <span className="text-4xl mb-4 block">{s.icon}</span>
            <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Doctor = () => (
  <section id="doctor" className="py-20 section-alt">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Doctor</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Expert Care, Trusted Hands</h2>
      </div>
      <div className="max-w-sm mx-auto bg-background rounded-2xl overflow-hidden shadow-lg border">
        <img src={doctorImage} alt="Dr. Jayanth - Dental Surgeon" className="w-full h-72 object-cover" loading="lazy" width={512} height={640} />
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-foreground">Dr. Jayanth</h3>
          <p className="text-primary font-medium text-sm mt-1">Dental Surgeon</p>
          <p className="text-muted-foreground text-sm mt-3">Experienced dental professional specializing in implants and advanced dental procedures with a patient-first approach.</p>
        </div>
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section id="reviews" className="py-20">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Reviews</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">What Our Patients Say</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {REVIEWS.map(r => (
          <div key={r.name} className="bg-background rounded-xl p-6 border shadow-sm">
            <div className="flex gap-1 mb-4">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{r.text}"</p>
            <p className="font-semibold text-foreground text-sm">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 section-alt">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Contact</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Visit Us Today</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div className="space-y-6">
          {[
            { icon: MapPin, label: "Address", value: "3rd Block, 5, 1st Main Rd, near Canara Bank, Basaveshwar Nagar, Bengaluru" },
            { icon: Phone, label: "Phone", value: "+91 9945275357", href: "tel:+919945275357" },
            { icon: Mail, label: "Email", value: "dentalclinicjayasurya@gmail.com", href: "mailto:dentalclinicjayasurya@gmail.com" },
            { icon: Clock, label: "Timings", value: "Mon–Sat: 10:00 AM – 8:00 PM\nSunday: Closed" },
          ].map(item => (
            <div key={item.label} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-pre-line">{item.value}</a>
                ) : (
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden border shadow-sm">
          <iframe
            title="JAYA SURYA Dental Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6!2d77.53!3d12.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzI0LjAiTiA3N8KwMzEnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container text-center">
      <p className="text-xl font-extrabold text-primary-foreground mb-2">JAYA SURYA Dental & Advanced Implant Center</p>
      <p className="text-sm text-primary-foreground/60">Basaveshwar Nagar, Bengaluru</p>
      <p className="text-xs text-primary-foreground/40 mt-6">© {new Date().getFullYear()} JAYA SURYA Dental. All rights reserved.</p>
    </div>
  </footer>
);

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Doctor />
    <Reviews />
    <Contact />
    <Footer />
  </>
);

export default Index;
